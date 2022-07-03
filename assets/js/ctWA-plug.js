console.log("test2");
//create-guten-block >> bibliothèque de création de block wp
wp.blocks.registerBlockType("wa/tarot-cartes", {
  title: "Tarots",
  icon: "gallery",
  category: "widgets",
  attributes: {
    content: {
      type: "string",
    },
  },
  edit: function (props) {
    function updateContent(e){
        props.setAttributes({content: e.target.value})
    };

    return wp.element.createElement(
      "div",
      null,
      /*#__PURE__*/ wp.element.createElement("h3", null, "Pr\xE9dictions tarot"),
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

  save: function (props) {
    return null;
  },
});
