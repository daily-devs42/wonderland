import type { HttpContext } from '@adonisjs/core/http'

export default class HomeController {
  async handle({ auth, view }: HttpContext) {
    await auth.check()
    return view.render('pages/home')
  }
}
