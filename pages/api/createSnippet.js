import { getSession, withApiAuthRequired } from "@auth0/nextjs-auth0"
import { createSnippet } from "../../utils/Fauna"

export default withApiAuthRequired(async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ msg: 'Method not allowed.' })
  }
  const session = getSession(req, res)
  const userId = session.user.sub
  const { code, language, description, name } = req.body
  try {
    const createdSnippet = await createSnippet({ code, language, description, name, userId })
    return res.status(200).json(createdSnippet)
  }
  catch (err) {
    console.error(err)
    res.status(500).json({ msg: 'Something went wrong.' })
  }
})
