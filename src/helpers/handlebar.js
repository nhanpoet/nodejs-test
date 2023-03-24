const Handlebars = require("handlebars");

module.exports = {
  sortable: (filed, sort) => {
    const sortType = filed === sort.column ? sort.type : "default";

    const icons = {
      default: "fa-solid fa-sort",
      asc: "fa-solid fa-arrow-down-a-z",
      desc: "fa-solid fa-arrow-down-z-a",
    };

    const types = {
      default: "desc",
      asc: "desc",
      desc: "asc",
    };

    const icon = icons[sortType];
    const type = types[sortType];

    const href = Handlebars.escapeExpression(
      `?_sort&column=${filed}&type=${type}`
    );

    const output = `<a href="${href}"><i class="${icon}"></i></a>`;

    return new Handlebars.SafeString(output);
  },
};
