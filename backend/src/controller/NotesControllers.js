const knex = require('../database/knex')

class NotesController {
  async create(req, res) {
    const { title, description, tags, links } = req.body

    const user_id = req.user.id

    const note_id = await knex('notes').insert({
      title,
      description,
      user_id
    })

    const linksInsert = links.map(link => {
      return {
        note_id,
        url: link
      }
    })

    await knex('links').insert(linksInsert)

    const tagsInsert = tags.map(name => {
      return {
        note_id,
        name,
        user_id
      }
    })

    await knex('tags').insert(tagsInsert)

    res.json()
  }
  async show(req, res) {
    const { id } = req.params

    const note = await knex('notes').where({ id }).first()
    const tags = await knex('tags').where({ note_id: id }).orderBy('name')
    const links = await knex('links')
      .where({ note_id: id })
      .orderBy('created_at')
    return res.json({
      ...note,
      tags,
      links
    })
  }
  async delete(req, res) {
    const { id } = req.params

    await knex('notes').where({ id }).delete()

    res.json()
  }
  async index(req, res) {
    const { title, tags } = req.query

    const user_id = req.user.id

    let notes

    if (tags) {
      const filterTag = tags.split(',').map(tags => tags.trim())

      notes = await knex('tags')
        .select(['notes.id', 'notes.title', 'notes.user_id'])
        .where('notes.user_id', user_id)
        .whereLike('notes.title', `%${title}%`)
        .whereIn('name', filterTag)
        .innerJoin('notes', 'notes.id', 'tags.note_id')
        .groupBy('notes.id')
        .orderBy('notes.title')
    } else {
      notes = await knex('notes')
        .where({ user_id })
        .whereLike(`title`, `%${title}%`)
        .orderBy('title')
    }

    const userTags = await knex('tags').where({ user_id })
    console.log(userTags)
    const notesWithTags = notes.map(notes => {
      const noteTags = userTags.filter(tag => tag.note_id === notes.id)

      return {
        ...notes,
        tags: noteTags
      }
    })

    return res.json(notesWithTags)
  }
}

module.exports = NotesController