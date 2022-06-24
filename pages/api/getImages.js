// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import unsplashInstance from "../../src/axiosInstance/UnsplashInstance";

export default async function handler(req, res) {
  try {

    const {
      query,
      page = 1,
      per_page = 10,
    } = req.query;

    console.assert(query, "query is required");

    const result = await unsplashInstance.get(`/search/photos`, {params: {query, page, per_page}});
    res.status(200).json(result.data)
  }
  catch (error) {
    console.error(error);
    res.status(500).json({ error })
  }

}
