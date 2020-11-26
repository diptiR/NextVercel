export default function handler(req, res) {
    if (!req.query.slug) {
        return res.status(401).json({message: 'Invalid token'})
    }
    const slug = req.query.slug;
    res.setPreviewData({});
    res.writeHead(307, { Location: `/${slug}`})
    res.end();
}
  