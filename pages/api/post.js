export default async function handler(req, res) {
    const response = await fetch(
      "https://2bxd69w7-dev.preview.zesty.io/-/custom/services?token=12345678"
    );
    const posts = await response.text();
    res.end(posts);
    //res.end(JSON.stringify(req.headers))
  }
  