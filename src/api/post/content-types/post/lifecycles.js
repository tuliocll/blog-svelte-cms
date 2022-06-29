module.exports = {
  async beforeFindMany(event) {
    // Check if is searching for a one post
    if (event.params.where && event.params.where.slug) {
      const slug = event.params.where.slug["$eq"];

      const article = await strapi.db.query("api::post.post").findOne({
        where: { slug },
      });

      const views = article.views || 0;

      await strapi.query("api::post.post").update({
        where: { slug },
        data: { views: views + 1 },
      });
    }
  },
};
