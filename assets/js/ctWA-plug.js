(()=> {
  
  //create-guten-block >> bibliothèque de création de block wp
  wp.blocks.registerBlockType("wa/tarot-cartes", {
    title: "Tarots",
    icon: "gallery",
    category: "widgets",
    attributes: {
      blockWidth: {
        type: "number",
      },
      blockHeight: {
        type: "number",
      },
    },
    edit: function (props) {
      function updateBlockWidth(e) {
        props.setAttributes({ blockWidth: parseInt(e.target.value) });
      }
      function updateBlocHeight(e) {
        props.setAttributes({ blockHeight: parseInt(e.target.value) });
      }
  
      return wp.element.createElement(
        "div",
        null,
        wp.element.createElement(
          "h3",
          null,
          "Prédictions tarot"
        ),
        // wp.element.createElement("button", {
        //   "data-popup-ref": "monPopup"
        // }, "Active Fenetre Modale"),
        // wp.element.createElement("div", {
        //   class: "popup",
        //   "data-popup-id": "monPopup"
        // }, wp.element.createElement("div", {
        //   class: "popup-content"
        // }, wp.element.createElement("div", {
        //   class: "popup-header"
        // }, wp.element.createElement("div", {
        //   class: "title"
        // }, "Paramètres du block Cartes Tarot"), wp.element.createElement("span", {
        //   class: "btn-close",
        //   "data-dismiss-popup": true
        // }, " &times")), wp.element.createElement("div", {
        //   class: "popup-body"
        // }, wp.element.createElement("label", {
        //   for: "wa-WidthBlock"
        // }, " Largeur du block"), wp.element.createElement("input", {
        //   type: "number",
        //   id: "wa-WidthBlock",
        //   onChange: updateBlockWidth,
        //   value: "props.attributes.blockWidth"
        // }), wp.element.createElement("label", {
        //   for: "wa-HeightBlock"
        // }, " Hauteur du block"), wp.element.createElement("input", {
        //   type: "number",
        //   id: "wa-HeightBlock",
        //   onChange: updateBlocHeight,
        //   value: props.attributes.blockHeight,

        // })), wp.element.createElement("div", {
        //   class: "popup-footer"
        // }, wp.element.createElement("button", {
        //   class: "btn-close",
        //   "data-dismiss-popup": true
        // }, "Fermer"))))
        wp.element.createElement(
          "label",
          {
            htmlFor: "wa-WidthBlock",
          },
          "Largeur du block"
        ),
        wp.element.createElement("input", {
          type: "number",
          id: "wa-WidthBlock",
          onChange: updateBlockWidth,
          value: props.attributes.blockWidth,
        }),
        wp.element.createElement(
          "label",
          {
            htmlFor: "wa-HeightBlock",
          },
          "Hauteur du block"
        ),
        wp.element.createElement("input", {
          type: "number",
          id: "wa-HeightBlock",
          onChange: updateBlocHeight,
          value: props.attributes.blockHeight,
        }),


        wp.element.createElement("a", {
          href: "#id01"
        }, "Ouvrir la fen\xEAtre modale"),
        wp.element.createElement("div", {
          id: "id01",
          class: "modal"
        }, wp.element.createElement("div", {
          class: "modal-dialog"
        }, wp.element.createElement("div", {
          class: "modal-content"
        }, wp.element.createElement("header", {
          class: "container"
        }, wp.element.createElement("a", {
          href: "#",
          class: "closebtn"
        }, "\xD7"), wp.element.createElement("h2", null, "Entête de modale")), wp.element.createElement("div", {
          class: "container"
        }, wp.element.createElement("p", null, "Texte dans la fenêtre modale.")), wp.element.createElement("footer", {
          class: "container"
        }, wp.element.createElement("p", null, "Pied de page de modale")))))


      );
    },
  
    save: function (props) {
      // return wp.element.createElement("div", {
      //   class: "tarot-card-container",
      //   style: "border:1px solid black;width:"+props.attributes.blockWidth+"px; height:"+props.attributes.blockHeight+"px",
      // });
      return wp.element.createElement("div", {
        class: "cards"
      },

wp.element.createElement("div", {
  class: "cardsT"
}, wp.element.createElement("div", {
  class: "cardT"
}, wp.element.createElement("div", {
  class: "cardT-back"
})), wp.element.createElement("div", {
  class: "cardT"
}, wp.element.createElement("div", {
  class: "cardT-back"
})), wp.element.createElement("div", {
  class: "cardT"
}, wp.element.createElement("div", {
  class: "cardT-back"
})), wp.element.createElement("div", {
  class: "cardT"
}, wp.element.createElement("div", {
  class: "cardT-back"
})), wp.element.createElement("div", {
  class: "cardT"
}, wp.element.createElement("div", {
  class: "cardT-back"
})), wp.element.createElement("div", {
  class: "cardT"
}, wp.element.createElement("div", {
  class: "cardT-back"
})), wp.element.createElement("div", {
  class: "cardT"
}, wp.element.createElement("div", {
  class: "cardT-back"
})), wp.element.createElement("div", {
  class: "cardT"
}, wp.element.createElement("div", {
  class: "cardT-back"
})), wp.element.createElement("div", {
  class: "cardT"
}, wp.element.createElement("div", {
  class: "cardT-back"
})), wp.element.createElement("div", {
  class: "cardT"
}, wp.element.createElement("div", {
  class: "cardT-back"
})), wp.element.createElement("div", {
  class: "cardT"
}, wp.element.createElement("div", {
  class: "cardT-back"
})), wp.element.createElement("div", {
  class: "cardT"
}, wp.element.createElement("div", {
  class: "cardT-back"
})), wp.element.createElement("div", {
  class: "cardT"
}, wp.element.createElement("div", {
  class: "cardT-back"
})), wp.element.createElement("div", {
  class: "cardT"
}, wp.element.createElement("div", {
  class: "cardT-back"
})), wp.element.createElement("div", {
  class: "cardT"
}, wp.element.createElement("div", {
  class: "cardT-back"
})), wp.element.createElement("div", {
  class: "cardT"
}, wp.element.createElement("div", {
  class: "cardT-back"
})), wp.element.createElement("div", {
  class: "cardT"
}, wp.element.createElement("div", {
  class: "cardT-back"
})), wp.element.createElement("div", {
  class: "cardT"
}, wp.element.createElement("div", {
  class: "cardT-back"
})), wp.element.createElement("div", {
  class: "cardT"
}, wp.element.createElement("div", {
  class: "cardT-back"
})), wp.element.createElement("div", {
  class: "cardT"
}, wp.element.createElement("div", {
  class: "cardT-back"
})), wp.element.createElement("div", {
  class: "cardT"
}, wp.element.createElement("div", {
  class: "cardT-back"
})), wp.element.createElement("div", {
  class: "cardT"
}, wp.element.createElement("div", {
  class: "cardT-back"
})))
      );
    },
  });
})()

