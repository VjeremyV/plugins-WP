console.log("test2");
//create-guten-block >> bibliothèque de création de block wp
wp.blocks.registerBlockType("wa/tarot-cartes", {
  title: "Tarots",
  icon: "gallery",
  category: "widgets",
  attributes: {
    content: {
      type: "number",
    },
  },
  edit: function (props) {
    function updateContent(e) {
      props.setAttributes({ content: parseInt(e.target.value) });
    }

    return wp.element.createElement(
      "div",
      null,
      /*#__PURE__*/ wp.element.createElement(
        "h3",
        null,
        "Prédictions tarot"
      ),
      /*#__PURE__*/ wp.element.createElement(
        "label",
        {
          htmlFor: "wa-numberCard",
        },
        "Choisissez le nombre de cartes \xE0 afficher"
      ),
      /*#__PURE__*/ wp.element.createElement("input", {
        type: "number",
        id: "wa-numberCard",
        onChange: updateContent,
        value: props.attributes.content,
      })
    );
  },

  save: function () {
    // fetch("https://api.example.com/items")

    return wp.element.createElement("div", {
      class: "tarot-card-container"
    });
  },
});
