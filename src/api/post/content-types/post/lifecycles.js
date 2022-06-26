module.exports = {
  async beforeFindMany(event) {
    // Check if is searching for a one post
    if (event.params.where && event.params.where.slug) {
      const article = await strapi.query("api::post.post").findOne({
        slug: "testeando-localhost",
      });

      await strapi.query("api::post.post").update({
        where: { slug: "testeando-localhost" },
        data: { views: article.views + 1 },
      });
    }
  },
};
