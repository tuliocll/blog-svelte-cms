module.exports = {
  async beforeFindMany(event) {
    // Check if is searching for a one post
    if (event.params.where && event.params.where.slug) {
      const { slug } = event.params.where;
      const article = await strapi.query("api::post.post").findOne({
        slug,
      });

      await strapi.query("api::post.post").update({
        where: { slug },
        data: { views: article.views || 0 + 1 },
      });
    }
  },
};
