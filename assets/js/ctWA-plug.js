(()=> {
  const el = wp.element.createElement;
  const iconEl = el('svg', { width: 20, height: 20 },
    el('path', { d: "M4 207 c-2 -7 -3 -56 -2 -108 l3 -94 75 0 75 0 0 105 0 105 -73 3 c-54 2 -74 -1 -78 -11z m146 -97 l0 -100 -70 0 -70 0 0 100 0 100 70 0 70 0 0 -100z M66 152 c-2 -4 4 -8 14 -8 10 0 16 4 14 8 -3 4 -9 8 -14 8 -5 0 -11 -4 -14 -8z M63 94 c-17 -8 -4 -34 17 -34 23 0 33 27 14 34 -9 3 -16 6 -17 5 -1 0 -7 -3 -14 -5z m27 -14 c0 -5 -4 -10 -10 -10 -5 0 -10 5 -10 10 0 6 5 10 10 10 6 0 10 -4 10 -10z" , transform:"translate(0.000000,22.000000) scale(0.100000,-0.100000)", fill:"#000000", stroke:'none'} )
  );
  //create-guten-block >> bibliothèque de création de block wp
  wp.blocks.registerBlockType("wa/tarot-cartes", {
    title: "Tarots",
    icon: iconEl,
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
      // function updateBlockWidth(e) {
      //   props.setAttributes({ blockWidth: parseInt(e.target.value) });
      // }
      // function updateBlocHeight(e) {
      //   props.setAttributes({ blockHeight: parseInt(e.target.value) });
      // }
  
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
      return wp.element.createElement("div", {
        class: "cards"
      }, React.createElement("div", {
        id: "TitleCardContainer"
      }, wp.element.createElement("p", null, "Le tirage des 7 piliers : Faites votre choix !")),
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
        class: "t-card-img"
      }), wp.element.createElement("div", {
        class: "t-card-back"
      }))), wp.element.createElement("div", {class: "t-card-text"}, wp.element.createElement("h3", {
        class: "t-card-title"
      }), wp.element.createElement("p", {
        class: "t-card-description"
      }))), wp.element.createElement("div", {
        id: "miniCardsResultsContainer"
      },wp.element.createElement("div", {
        class: "miniCardResultContainer"
      },wp.element.createElement("div", {
        class: "minImgCardResultContainer",
        id : 'img1'
      }),wp.element.createElement("h4", {
        class: "miniTitlteCardResultContainer"
      })),wp.element.createElement("div", {
        class: "miniCardResultContainer"
      },wp.element.createElement("div", {
        class: "minImgCardResultContainer",
        id : 'img2'
      }),wp.element.createElement("h4", {
        class: "miniTitlteCardResultContainer"
      })),wp.element.createElement("div", {
        class: "miniCardResultContainer"
      },wp.element.createElement("div", {
        class: "minImgCardResultContainer",
        id : 'img3'
      }),wp.element.createElement("h4", {
        class: "miniTitlteCardResultContainer"
      })),wp.element.createElement("div", {
        class: "miniCardResultContainer"
      },wp.element.createElement("div", {
        class: "minImgCardResultContainer",
        id : 'img4'
      }),wp.element.createElement("h4", {
        class: "miniTitlteCardResultContainer"
      })),wp.element.createElement("div", {
        class: "miniCardResultContainer"
      },wp.element.createElement("div", {
        class: "minImgCardResultContainer",
        id : 'img5'
      }),wp.element.createElement("h4", {
        class: "miniTitlteCardResultContainer"
      })),wp.element.createElement("div", {
        class: "miniCardResultContainer"
      },wp.element.createElement("div", {
        class: "minImgCardResultContainer",
        id : 'img6'
      }),wp.element.createElement("h4", {
        class: "miniTitlteCardResultContainer"
      })),wp.element.createElement("div", {
        class: "miniCardResultContainer"
      },wp.element.createElement("div", {
        class: "minImgCardResultContainer",
        id : 'img7'
      }),wp.element.createElement("h4", {
        class: "miniTitlteCardResultContainer"
      }))),
      wp.element.createElement("div", {
        id: "miniResumeCardsResultsContainer"
      }))
    },
  });
})()

