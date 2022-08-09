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
        }))), wp.element.createElement("div", {
          class: "card-result"
        }, wp.element.createElement("div", {
          class: "bigCardContainer"
        }, wp.element.createElement("div", {
          class: "bigCardResult"
        }, wp.element.createElement("div", {
          class: "t-card-back"
        })))
        )
      );
    },
  
    save: function (props) {
      // return wp.element.createElement("div", {
      //   class: "tarot-card-container",
      //   style: "border:1px solid black;width:"+props.attributes.blockWidth+"px; height:"+props.attributes.blockHeight+"px",
      // });
      return wp.element.createElement("div", {
        class: "cards"
      }, wp.element.createElement("div", {
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
      }))), wp.element.createElement("div", {
        class: "card-result"
      }, wp.element.createElement("div", {
        class: "bigCardContainer"
      }, wp.element.createElement("div", {
        class: "bigCardResult"
      }, wp.element.createElement("div", {
        class: "t-card-img"
      }), wp.element.createElement("div", {
        class: "t-card-back"
      }))), wp.element.createElement("div", null, wp.element.createElement("h3", {
        class: "t-card-title"
      }), wp.element.createElement("p", {
        class: "t-card-description"
      }))))
    },
  });
})()

