function Header() {
  return {
    view: () => [
      m("input", {
        name: "correos-ui-input_71855",
        type: "search",
        autocomplete: "none",
        style: {
          outline: "rgb(51, 51, 51) none 0px",
          "box-sizing": "border-box",
          color: "rgb(51, 51, 51)",
          cursor: "pointer",
          "border-bottom": "2px solid rgb(255, 205, 0)",
          "padding-bottom": "5px",
          "border-bottom-color": "rgb(255, 205, 0)",
          "font-family":
            "Cartero, 'Helvetica Neue', Helvetica, Arial, sans-serif",
          "padding-left": "16px",
          "padding-right": "48px",
          "-webkit-font-smoothing": "antialiased",
          "font-size": "16px",
          "font-weight": "400",
          "letter-spacing": "0.15px",
          "text-decoration": "none solid rgb(51, 51, 51)",
          "text-transform": "none",
          "align-self": "flex-end",
          width: "100%",
          height: "55px",
          padding: "20px 48px 5px 16px",
          transition: "opacity 0.15s cubic-bezier(0.4, 0, 0.2, 1)",
          "border-top": "0px none rgb(51, 51, 51)",
          "border-right": "0px none rgb(51, 51, 51)",
          "border-left": "0px none rgb(51, 51, 51)",
          "border-image": "none",
          "border-radius": "0px",
          appearance: "none",
          "caret-color": "rgb(98, 0, 238)",
        },
      }),
    ],
  };
}

/*
function EnviosNacionales(){
  return{
    view: () => [

    ]

  };
}
  */

function EnviosNacionales() {
  return {
    view: () => [
      m(
        "section",
        {
          style: {
            display: "flex", "justify-content": "center", "align-items": "center", "flex-wrap" :"wrap", gap: "130px", margin: "0 auto", marginTop: "50px", marginBottom:"-40px",padding: "0px",
          },
        },
        [
          m(
            "div",
            {
              style: {
                display: "flex", "flex-direction": "column", "align-items": "center",
              },
            },
            [
              m("img", {
                src: "./img/paqueteriaweb.jpg",
                alt: "Descripción de la imagen",
                style: {
                  width: "450px", padding: "0px 50px",
                },
              }),
            ]
          ),
          m(
            "div",
            {
              style: {
                display: "flex", "align-items": "center", marginBottom: "30px"
              },
            },
            [
              // Contenedor del texto y botón
              m(
                "div",
                {
                  style: {
                    width: "450px", "box-sizing": "border-box", display: "flex", "flex-direction": "column",
                  },
                },
                [
                  m(
                    "h1",
                    {
                      style: {
                        "font-size": "14px", "line-height": "20px", margin: "0px 0px 8px", padding: "0px", color: "rgb(51, 51, 51)", "font-weight": "700",
                      },
                    },
                    "Paquetería"
                  ),
                  m(
                    "span",
                    {
                      style: {
                        "font-size": "32px", "line-height": "44px", margin: "0px", padding: "0px", color: "rgb(51, 51, 51)", "font-weight": "300",
                      },
                    },
                    "Tus envíos nacionales"
                  ),
                  m(
                    "span",
                    {
                      style: {
                        "font-size": "16px", "line-height": "24px", margin: "8px 0px 0px", padding: "0px", color: "rgb(51, 51, 51)", "font-weight": "300",
                      },
                    },
                    "Ya sea para una mudanza, un regalo u otra ocasión, realiza tus envíos de manera fácil y económica para que lleguen a su destino cuando lo necesites."
                  ),
                  m(
                    "div",
                    {
                      style: {
                        display: "flex", "padding-top": "16px",
                      },
                    },
                    m(
                      "correos-ui-button",
                      {
                        theme: "primary",
                        type: "text",
                        "href-link":
                          "https://www.correos.es/es/es/particulares/enviar/envios-nacionales/envios-economicos/servicio-especial-de-paqueteria?utm_source=site_cor_ces&amp;utm_medium=banner&amp;utm_campaign=Corr_Jun24_paquetB2C&amp;utm_term=home&amp;utm_content=part",
                        target: "_self",
                        style: {
                          visibility: "visible", "margin-right": "24px", "margin-top": "16px", display: "block",
                        },
                      },
                      m(
                        "a",
                        {
                          href: "https://www.correos.es/es/es/particulares/enviar/envios-nacionales/envios-economicos/servicio-especial-de-paqueteria?utm_source=site_cor_ces&amp;utm_medium=banner&amp;utm_campaign=Corr_Jun24_paquetB2C&amp;utm_term=home&amp;utm_content=part",
                          target: "_self",
                          style: {
                            "min-width": "128px", "font-size": "16px", "line-height": "24px", color: "rgb(0, 46, 109)", "background-color": "rgb(255, 205, 0)", "border-color": "rgb(179, 143, 0)", height: "55.9922px", border: "1.5px solid rgb(179, 143, 0)", "font-weight": "700", "border-radius": "8px", padding: "0px 24px", "text-decoration": "none solid rgb(0, 46, 109)", display: "inline-flex", "align-items": "center", "justify-content": "center",
                          },
                          onmouseover: function (e) {
                            e.currentTarget.style.backgroundColor = "rgb(200, 180, 0)"; // Color al pasar el ratón
                          },
                          onmouseout: function (e) {
                            e.currentTarget.style.backgroundColor = "rgb(255, 205, 0)"; // Color original
                          },
                        },
                        "MÁS INFO"
                      )
                    )
                  ),
                ]
              ),
              m("img", {
                src: "./img/decotriangles.svg",
                alt: "Nueva imagen",
                style: {
                  position: "absolute", width: "120px", height: "auto", "margin-left": "500px",
                },
              }),
              m("img", {
                src: "./img/decobars.svg",
                alt: "Nueva imagen",
                style: {
                  position: "absolute", width: "220px", height: "auto", margin: "450px 0px 0px 525px", "z-index": "-1"
                },
              }),
            ]
          ),
        ]
      ),
    ],
  };
}

function Servicioespecialpaqueteria() {
  return {

    view: () => [
      m(
        "section",
        {
          slot: "components",
          style: {
            marginTop: "40px", "box-sizing": "border-box", width: "100%", padding: "0px 0px 20px 0px", display: "flex", "flex-wrap": "wrap", "justify-content": "center", "align-items": "center", gap: "20px 0px",
          },
        },
        [
          m(ServicioIzq),
          m(ServicioDer)
        ]
      ),
    ],
  };
}

function ServicioIzq() {
  return {
    model: {
      items: [
        {
          img: "./img/localizador.svg",
          texto: "Localiza oficinas",
        },
        {
          img: "./img/encuentra_cp.svg",
          texto: "Encuentra códigos postales",
        },
        {
          img: "./img/gnomo.svg",
          texto: "Verificador de email",
        },
      ],
    },
    view: ({ attrs }) => [
      m(
        "correos-cdk-tracking-box",
        {
          literals:
            "{&quot;searchFieldLabel&quot;:&quot;Nº de seguimiento de envío&quot;,&quot;details&quot;:&quot;VER DETALLES&quot;,&quot;buttonSubmitTxT&quot;:&quot;BUSCAR&quot;}",
          share:
            "[{&quot;targetLink&quot;:&quot;_blank&quot;,&quot;icon&quot;:&quot;icon-facebook&quot;,&quot;href&quot;:&quot;https://www.facebook.com/sharer/sharer.php?u=https://www.correos.es/es/es/particulares&quot;,&quot;titleLink&quot;:&quot;Facebook&quot;},{&quot;targetLink&quot;:&quot;_blank&quot;,&quot;icon&quot;:&quot;icon-twitter&quot;,&quot;href&quot;:&quot;https://twitter.com/intent/tweet?text=https://www.correos.es/es/es/particulares&quot;,&quot;titleLink&quot;:&quot;Twitter&quot;},{&quot;targetLink&quot;:&quot;_blank&quot;,&quot;icon&quot;:&quot;icon-linkedin&quot;,&quot;href&quot;:&quot;https://www.linkedin.com/shareArticle?mini=true&amp;url=https://www.correos.es/es/es/particulares&quot;,&quot;titleLink&quot;:&quot;Linkedin&quot;}]",
          variant: "landing",
          target: "_self",
          "url-form": "/es/es/herramientas/localizador/envios/detalle",
          "input-url-param": "tracking-number",
          "api-host": "https://api1.correos.es",
          "img-selected":
            "/etc.clientlibs/correos-comun-aem/clientlibs/clientlib-base/resources/assets/images/checkbox-selected.svg",
          "img-pasive":
            "/etc.clientlibs/correos-comun-aem/clientlibs/clientlib-base/resources/assets/images/checkbox-pasive.svg",
          "img-inactive":
            "/etc.clientlibs/correos-comun-aem/clientlibs/clientlib-base/resources/assets/images/checkbox-inactive.svg",
          size: "sm",
          style: {
            margin: "0 16px", justifyContent: "center", alignItems: "center", width: "550px", visibility: "visible", display: "block",
          },
        },
        [
          m("div", { style: { "box-sizing": "border-box" } }),
          m(
            "correos-ui-animation",
            {
              "animation-type": "loader_componentes",
              style: {
                "box-sizing": "border-box", visibility: "visible", display: "block", position: "relative",
              },
            },
            m(
              "div",
              {
                style: {
                  "box-sizing": "border-box", display: "flex", "flex-direction": "column", padding: "24px", height: "550px", "border-radius": "8px", "background-color": "rgb(255, 205, 0)", "box-shadow": "rgba(0, 0, 0, 0.1) 0px 10px 20px 0px",
                },
              },
              [
                m(
                  "div",
                  { style: { "box-sizing": "border-box"} },
                  [
                    m(
                      "div",
                      { style: { "box-sizing": "border-box" } },
                      m(
                        "h1",
                        {
                          slot: "title",
                          style: { "box-sizing": "border-box" },
                        },
                        "Sigue tu envío"
                      )
                    ),
                    m(
                      "form",
                      {
                        autocomplete: "off",
                        target: "_self",
                        action:
                          "/es/es/herramientas/localizador/envios/detalle",
                        style: { "box-sizing": "border-box" },
                      },
                      m(
                        "div",
                        {
                          style: {
                            "box-sizing": "border-box",
                            display: "flex",
                            width: "100%",
                          },
                        },
                        [
                          m("legend", {
                            style: {
                              position: "absolute", left: "-159984px", "box-sizing": "border-box",
                            },
                          }),
                          m(
                            "fieldset",
                            {
                              style: {
                                "box-sizing": "border-box", border: "0px none rgb(51, 51, 51)", padding: "0px", margin: "0px", "min-width": "0px", flex: "1 1 auto",
                              },
                            },
                            m(
                              "correos-ui-input",
                              {
                                type: "text",
                                variant: "tracking-box",
                                style: {
                                  width: "100%", "box-sizing": "border-box", visibility: "visible", display: "flex",
                                },
                              },
                              m(
                                "div",
                                {
                                  style: {
                                    "box-sizing": "border-box", width: "100%", display: "flex", "flex-wrap": "wrap", "align-items": "baseline",
                                  },
                                },
                                m(
                                  "div",
                                  {
                                    style: {
                                      "box-sizing": "border-box", "background-color": "rgb(255, 255, 255)", width: "100%", display: "block", "border-radius": "8px 8px 0px 0px", "border-top": "1px solid rgb(148, 148, 148)", "border-left": "1px solid rgb(148, 148, 148)", "border-right": "1px solid rgb(148, 148, 148)", "border-bottom-color": "rgba(0, 0, 0, 0.12)", height: "56px", position: "relative", overflow: "hidden", "will-change": "opacity, transform, color",
                                    },
                                  },
                                  [
                                    m("input", {
                                      name: "tracking-number",
                                      type: "text",
                                      autocomplete: "none",
                                      required: "required",
                                      style: {
                                        "box-sizing": "border-box", "border-bottom-color": "rgb(255, 205, 0)", color: "rgb(148, 148, 148)", "font-family": "Cartero, 'Helvetica Neue', Helvetica, Arial, sans-serif", "padding-left": "16px", "padding-right": "48px", "box-shadow": "none", "font-size": "16px", "font-weight": "400", "letter-spacing": "0.15px", "text-decoration": "none solid rgb(148, 148, 148)", "text-transform": "none", "align-self": "flex-end", width: "100%", height: "55px", padding: "20px 48px 6px 16px", transition: "opacity 0.15s cubic-bezier(0.4, 0, 0.2, 1)", "border-top": "0px none rgb(148, 148, 148)", "border-right": "0px none rgb(148, 148, 148)", "border-left": "0px none rgb(148, 148, 148)", "border-image": "none", "border-bottom": "1px solid rgb(255, 205, 0)", "border-radius": "0px", appearance: "none", "caret-color": "rgb(98, 0, 238)",
                                      },
                                    }),
                                    m(
                                      "label",
                                      {
                                        for: "tracking-number",
                                        style: {
                                          "box-sizing": "border-box", "max-width": "calc(100% - 32px)", "font-family": "Cartero, 'Helvetica Neue', Helvetica, Arial, sans-serif", left: "16px", right: "98.2031px", top: "27.5px", transform: "matrix(1, 0, 0, 1, 0, -9.19531)", "pointer-events": "none", color: "rgba(0, 0, 0, 0.6)", "-webkit-font-smoothing": "antialiased", "font-size": "16px", "font-weight": "400", "letter-spacing": "0.15px", "text-decoration": "none solid rgba(0, 0, 0, 0.6)", "text-transform": "none", position: "absolute", "transform-origin": "0px 0px", transition: "transform 0.15s cubic-bezier(0.4, 0, 0.2, 1), color 0.15s cubic-bezier(0.4, 0, 0.2, 1), -webkit-transform 0.15s cubic-bezier(0.4, 0, 0.2, 1)", "line-height": "18.4px", "text-align": "left", "text-overflow": "ellipsis", "white-space": "nowrap", cursor: "text", overflow: "hidden", "will-change": "transform",
                                        },
                                      },
                                      "Nº de seguimiento de envío"
                                    ),
                                    m("div", {
                                      style: {
                                        "box-sizing": "border-box",
                                        "background-color":
                                          "rgb(0, 46, 109)",
                                        position: "absolute",
                                        bottom: "0px",
                                        left: "0px",
                                        width: "100%",
                                        height: "2px",
                                        transform:
                                          "matrix(0, 0, 0, 1, 0, 0)",
                                        transition:
                                          "transform 0.18s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.18s cubic-bezier(0.4, 0, 0.2, 1), -webkit-transform 0.18s cubic-bezier(0.4, 0, 0.2, 1)",
                                        opacity: "0",
                                        "z-index": "2",
                                      },
                                    }),
                                  ]
                                )
                              )
                            )
                          ),
                          m(
                            "correos-ui-button",
                            {
                              "aria-label": "BUSCAR",
                              "full-width": "true",
                              theme: "secondary",
                              form: "",
                              variant: "no-icons",
                              style: {
                                "box-sizing": "border-box", visibility: "visible", width: "27%", "margin-left": "16px", display: "block",
                              },
                            },
                            m(
                              "div",
                              {
                                style: {
                                  "box-sizing": "border-box",
                                  display: "inline",
                                },
                              },
                              m(
                                "button",
                                {
                                  type: "submit",
                                  "aria-label": "BUSCAR",
                                  style: {
                                    "min-width": "auto", "font-size": "16px", "line-height": "24px", "box-sizing": "border-box", width: "100%", color: "rgb(255, 255, 255)", "background-color": "rgb(0, 46, 109)", "border-color": "rgba(0, 0, 0, 0)", height: "56px", border: "0px none rgba(0, 0, 0, 0)", "text-transform": "none", "font-weight": "700", "border-radius": "8px", padding: "0px 24px", "font-family": "Roboto, sans-serif", "letter-spacing": "1.42857px", "text-decoration": "none solid rgb(255, 255, 255)", display: "inline-flex", position: "relative", "align-items": "center", "justify-content": "center", outline: "rgb(255, 255, 255) none 0px", "user-select": "none", appearance: "none", overflow: "visible", "vertical-align": "middle",
                                  },
                                },
                                [
                                  m("div", {
                                    style: {
                                      "box-sizing": "content-box", "border-radius": "8px", top: "0px", left: "0px", position: "absolute", width: "100%", height: "56px", overflow: "hidden",
                                    },
                                  }),
                                  m("i", {
                                    slot: "icon-left",
                                    style: {
                                      "box-sizing": "border-box", display: "none", "justify-content": "flex-end", "align-items": "center", width: "1.5rem", height: "24px", "font-size": "24px", "font-family": "correos-icons", "font-weight": "400", "font-style": "normal", "font-variant": "normal", "text-rendering": "auto", "line-height": "24px", "margin-right": "16px",
                                    },
                                  }),
                                  m(
                                    "span",
                                    {
                                      style: {
                                        "box-sizing": "border-box", "letter-spacing": "normal", "font-family": "Cartero, 'Helvetica Neue', Helvetica, Arial, sans-serif",
                                      },
                                    },
                                    m(
                                      "span",
                                      {
                                        slot: "text",
                                        style: {
                                          "box-sizing": "border-box",
                                        },
                                      },
                                      "BUSCAR"
                                    )
                                  ),
                                ]
                              )
                            )
                          ),
                        ]
                      )
                    ),
                    m("div", {
                      style: {
                        "box-sizing": "border-box", "margin-top": "7px", "margin-bottom": "40px", color: "rgb(255, 205, 0)", "text-decoration": "none solid rgb(255, 205, 0)", display: "flex",
                      },
                    }),
                  ]
                ),
                this.state.model.items.map((i) =>
                  m("div", { style: { "box-sizing": "border-box" } }, [
                    m(
                      "target",
                      {
                        slot: "tool-first",
                      },
                      m(
                        "correos-ui-card",
                        {
                          "href-link":
                            "/es/es/herramientas/oficinas-buzones-citypaq/detalle",
                          target: "_self",
                          "component-type": "card",
                          "component-title": "Sigue tu envío",
                          size: "lg",
                          style: {
                            "box-sizing": "border-box", visibility: "visible", "justify-content": "flex-start", margin: "0px 0px 10px 0px", display: "flex", height: "74px", width: "100%", "align-items": "center", "box-shadow": "rgba(0, 0, 0, 0.1) 0px 10px 20px 0px", "border-radius": "8px", "background-color": "rgb(255, 255, 255)", transition: "box-shadow 0.2s ease-in-out, -webkit-box-shadow 0.2s ease-in-out", border: "1px solid rgb(203, 203, 203)",
                          },
                        },
                        m(
                          "a",
                          {
                            href: "/es/es/herramientas/oficinas-buzones-citypaq/detalle",
                            target: "_self",
                            style: {
                              "box-sizing": "border-box", display: "flex", "flex-direction": "row", width: "100%", "align-items": "center", "text-decoration": "none solid rgb(0, 0, 238)", padding: "16px",
                            },
                          },
                          m(
                            "div",
                            {
                              style: {
                                "box-sizing": "border-box", "flex-direction": "row", display: "flex", "align-items": "center",
                              },
                            },
                            [
                              m("img", {
                                slot: "image",
                                src: i.img,
                                alt: "",
                                style: {
                                  "box-sizing": "border-box", "margin-bottom": "0px", "margin-right": "16px", display: "block", width: "40px", height: "40px",
                                },
                              }),
                              m(
                                "p",
                                {
                                  slot: "text",
                                  style: {
                                    "font-size": "16px", "line-height": "24px", "box-sizing": "border-box", "text-align": "left", margin: "0px", padding: "0px", "font-weight": "400", color: "rgb(0, 46, 109)",
                                  },
                                },
                                i.texto
                              ),
                            ]
                          )
                        )
                      )
                    ),
                  ])
                ),
              ]
            )
          ),
        ]
      ),
    ]
  }
}

function ServicioDer() {
  return {
    model: {
      items: [
        {
          img: "./img/libro.svg",
          textoHasta: "Hasta 2kg",
          textoDimension: "Dimensión: 30x20x20"
        },
        {
          img: "./img/bota.svg",
          textoHasta: "Hasta 5kg",
          textoDimension: "Dimensión: 35x35x24"
        },
        {
          img: "./img/casco.svg",
          textoHasta: "Hasta 10kg",
          textoDimension: "Dimensión: 40x40x37"
        },
        {
          img: "./img/maletin.svg",
          textoHasta: "Hasta 20kg",
          textoDimension: "Dimensión: 55x55x39"
        },
      ],
    },
    view: ({ attrs }) => [
      m(
        "correos-cdk-section-box",
        {
          "center-content": "false",
          style: {
            margin: "0 16px", "flex-wrap" :"wrap", justifyContent: "center", alignItems: "center", width: "550px", visibility: "visible", display: "block", padding: "0px",
          },
        },
        m(
          "div",
          { style: { "box-sizing": "border-box" } },
          m(
            "div",
            {
              style: {
                "box-sizing": "border-box", "max-width": "none", "padding-left": "0px", "padding-right": "0px", "margin-left": "auto", "margin-right": "auto",
              },
            },
            m(
              "div",
              {
                style: {
                  "box-sizing": "border-box", "background-color": "var(--theme-color-white-plain)", padding: "24px", "box-sizing": "border-box", visibility: "visible", border: "1px solid rgb(203, 203, 203)", "box-shadow": "rgba(0, 0, 0, 0.2) 0px 10px 20px 0px", display: "block", width: "100%", height: "550px", "border-radius": "8px",
                },
              },
              m("div", { style: { "box-sizing": "border-box" } }, [
                m(
                  "div",
                  {
                    style: {
                      "box-sizing": "border-box", display: "flex", "justify-content": "space-between", "flex-direction": "row",
                    },
                  },
                  [
                    m(
                      "h3",
                      {
                        style: {
                          "font-size": "24px", "line-height": "36px", "box-sizing": "border-box", display: "block", margin: "0px 0px 16px", padding: "0px", "font-weight": "400",
                        },
                      },
                      "Servicio especial de paquetería"
                    ),
                    m(
                      "h3",
                      {
                        style: {
                          "font-size": "24px", "line-height": "36px", "box-sizing": "border-box", display: "block", margin: "0px 0px 16px", padding: "0px", "font-weight": "500",
                        },
                      },
                      "Desde 4,02"
                    ),
                  ]
                ),
                m(
                  "p",
                  {
                    style: {
                      "font-size": "18px", "line-height": "30px", "box-sizing": "border-box", display: "block", margin: "0px", padding: "0px", "font-weight": "300",
                    },
                  },
                  "Envíos económicos con recogida a domicilio"
                ),
                m(
                  "div",
                  {
                    style: {
                      "box-sizing": "border-box", "margin-top": "24px",
                    },
                  },
                  [
                    m(
                      "span",
                      {
                        style: {
                          "font-size": "18px", "line-height": "30px", "box-sizing": "border-box", display: "block", margin: "0px 0px 8px", padding: "0px", "font-weight": "400",
                        },
                      },
                      "¿Dónde quieres realizar el envío?"
                    ),
                    m(
                      "div",
                      {
                        style: {
                          "box-sizing": "border-box", display: "flex",
                        },
                      },
                      [
                        m(
                          "div",
                          {
                            style: {
                              "box-sizing": "border-box", width: "100%", display: "flex", "flex-wrap": "wrap", "align-items": "baseline", margin: "0px 10px 0px 0px",
                            },
                          },
                          m(
                            "div",
                            {
                              style: {
                                "box-sizing": "border-box", "background-color": "rgb(243, 242, 242)", width: "100%", display: "block", "border-radius": "8px 8px 0px 0px", "border-top": "1px solid rgb(148, 148, 148)", "border-left": "1px solid rgb(148, 148, 148)", "border-right": "1px solid rgb(148, 148, 148)", "border-bottom-color": "rgba(0, 0, 0, 0.12)", height: "56px", position: "relative", overflow: "hidden", "will-change": "opacity, transform, color",
                              },
                            },
                            [
                              m("input", {
                                name: "postalcodeorigin",
                                type: "text",
                                minlength: "5",
                                maxlength: "5",
                                autocomplete: "none",
                                required: "required",
                                style: {
                                  "box-sizing": "border-box", "border-bottom-color": "rgb(255, 205, 0)", color: "rgb(148, 148, 148)", "font-family": "Cartero, 'Helvetica Neue', Helvetica, Arial, sans-serif", "padding-left": "16px", "padding-right": "48px", "box-shadow": "none", "-webkit-font-smoothing": "antialiased", "font-size": "16px", "font-weight": "400", "letter-spacing": "0.15px", "text-decoration": "none solid rgb(148, 148, 148)", "text-transform": "none", "align-self": "flex-end", width: "100%", height: "55px", padding: "20px 48px 6px 16px", transition: "opacity 0.15s cubic-bezier(0.4, 0, 0.2, 1)", "border-top": "0px none rgb(148, 148, 148)", "border-right": "0px none rgb(148, 148, 148)", "border-left": "0px none rgb(148, 148, 148)", "border-image": "none", "border-bottom": "1px solid rgb(255, 205, 0)", "border-radius": "0px", appearance: "none", "caret-color": "rgb(98, 0, 238)",
                                },
                              }),
                              m(
                                "label",
                                {
                                  for: "postalcodeorigin",
                                  style: {
                                    "box-sizing": "border-box", "max-width": "calc(100% - 32px)", "font-family": "Cartero, 'Helvetica Neue', Helvetica, Arial, sans-serif", left: "16px", right: "16px", top: "27.5px", transform: "matrix(1, 0, 0, 1, 0, -9.19531)", "pointer-events": "none", color: "rgba(0, 0, 0, 0.6)", "-webkit-font-smoothing": "antialiased", "font-size": "16px", "font-weight": "400", "letter-spacing": "0.15px", "text-decoration": "none solid rgba(0, 0, 0, 0.6)", "text-transform": "none", position: "absolute", "transform-origin": "0px 0px", transition: "transform 0.15s cubic-bezier(0.4, 0, 0.2, 1), color 0.15s cubic-bezier(0.4, 0, 0.2, 1), -webkit-transform 0.15s cubic-bezier(0.4, 0, 0.2, 1)", "line-height": "18.4px", "text-align": "left", "text-overflow": "ellipsis", "white-space": "nowrap", cursor: "text", overflow: "hidden", "will-change": "transform",
                                  },
                                },
                                "Código postal origen*"
                              ),
                              m("div", {
                                style: {
                                  "box-sizing": "border-box", "background-color": "rgb(0, 46, 109)", position: "absolute", bottom: "0px", left: "0px", width: "100%", height: "2px", transform: "matrix(0, 0, 0, 1, 0, 0)", transition: "transform 0.18s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.18s cubic-bezier(0.4, 0, 0.2, 1), -webkit-transform 0.18s cubic-bezier(0.4, 0, 0.2, 1)", opacity: "0", "z-index": "2",
                                },
                              }),
                            ]
                          )
                        ),

                        m(
                          "correos-ui-input",
                          {
                            type: "text",
                            style: {
                              width: "100%", "box-sizing": "border-box", visibility: "visible", display: "flex", "max-width": "250px", "margin-right": "32px", "margin-bottom": "16px",
                            },
                          },
                          m(
                            "div",
                            {
                              style: {
                                "box-sizing": "border-box", width: "100%", display: "flex", "flex-wrap": "wrap", "align-items": "baseline",
                              },
                            },
                            m(
                              "div",
                              {
                                style: {
                                  "box-sizing": "border-box", "background-color": "rgb(243, 242, 242)", width: "100%", display: "block", "border-radius": "8px 8px 0px 0px", "border-top": "1px solid rgb(148, 148, 148)", "border-left": "1px solid rgb(148, 148, 148)", "border-right": "1px solid rgb(148, 148, 148)", "border-bottom-color": "rgba(0, 0, 0, 0.12)", height: "56px", position: "relative", overflow: "hidden", "will-change": "opacity, transform, color",
                                },
                              },
                              [
                                m("input", {
                                  name: "postalcodedestination",
                                  type: "text",
                                  minlength: "5",
                                  maxlength: "5",
                                  autocomplete: "none",
                                  required: "required",
                                  style: {
                                    "box-sizing": "border-box", "border-bottom-color": "rgb(255, 205, 0)", color: "rgb(148, 148, 148)", "font-family": "Cartero, 'Helvetica Neue', Helvetica, Arial, sans-serif", "padding-left": "16px", "padding-right": "48px", "box-shadow": "none", "-webkit-font-smoothing": "antialiased", "font-size": "16px", "font-weight": "400", "letter-spacing": "0.15px", "text-decoration": "none solid rgb(148, 148, 148)", "text-transform": "none", "align-self": "flex-end", width: "100%", height: "55px", padding: "20px 48px 6px 16px", transition: "opacity 0.15s cubic-bezier(0.4, 0, 0.2, 1)", "border-top": "0px none rgb(148, 148, 148)", "border-right": "0px none rgb(148, 148, 148)", "border-left": "0px none rgb(148, 148, 148)", "border-image": "none", "border-bottom": "1px solid rgb(255, 205, 0)", "border-radius": "0px", appearance: "none", "caret-color": "rgb(98, 0, 238)",
                                  },
                                }),
                                m(
                                  "label",
                                  {
                                    for: "postalcodedestination",
                                    style: {
                                      "box-sizing": "border-box", "max-width": "calc(100% - 32px)", "font-family": "Cartero, 'Helvetica Neue', Helvetica, Arial, sans-serif", left: "16px", right: "16px", top: "27.5px", transform: "matrix(1, 0, 0, 1, 0, -9.19531)", "pointer-events": "none", color: "rgba(0, 0, 0, 0.6)", "-webkit-font-smoothing": "antialiased", "font-size": "16px", "font-weight": "400", "letter-spacing": "0.15px", "text-decoration": "none solid rgba(0, 0, 0, 0.6)", "text-transform": "none", position: "absolute", "transform-origin": "0px 0px", transition: "transform 0.15s cubic-bezier(0.4, 0, 0.2, 1), color 0.15s cubic-bezier(0.4, 0, 0.2, 1), -webkit-transform 0.15s cubic-bezier(0.4, 0, 0.2, 1)", "line-height": "18.4px", "text-align": "left", "text-overflow": "ellipsis", "white-space": "nowrap", cursor: "text", overflow: "hidden", "will-change": "transform",
                                    },
                                  },
                                  "Código postal destino*"
                                ),
                                m("div", {
                                  style: {
                                    "box-sizing": "border-box", "background-color": "rgb(0, 46, 109)", position: "absolute", bottom: "0px", left: "0px", width: "100%", height: "2px", transform: "matrix(0, 0, 0, 1, 0, 0)", transition: "transform 0.18s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.18s cubic-bezier(0.4, 0, 0.2, 1), -webkit-transform 0.18s cubic-bezier(0.4, 0, 0.2, 1)", opacity: "0", "z-index": "2",
                                  },
                                }),
                              ]
                            )
                          )
                        ),
                      ]
                    ),
                  ]
                ),
                m(
                  "div",
                  {
                    style: {
                      "box-sizing": "border-box",
                      "margin-top": "24px",
                    },
                  },
                  [
                    m(
                      "span",
                      {
                        style: {
                          "font-size": "18px", "line-height": "30px", "box-sizing": "border-box", display: "block", margin: "0px 0px 8px", padding: "0px", "font-weight": "400",
                        },
                      },
                      "¿Qué tamaño y peso tiene?"
                    ),
                    m("span", {
                      style: {
                        "font-size": "16px", "line-height": "24px", "box-sizing": "border-box", display: "none", margin: "0px 0px 24px", padding: "0px", "font-weight": "300",
                      },
                    }),
                    m(
                      "correos-cdk-cards-size",
                      {
                        variant: "cards-container-responsive",
                        size: "xs",
                        style: {
                          display: "flex", "flex-direction": "row", "box-sizing": "border-box", "justify-content": "center", "align-items": "center", gap: "20px", width: "100%",

                        },
                      },
                      [
                        this.state.model.items.map((i) =>
                          m(
                            "correos-ui-card-size",
                            {
                              slot: "cards",
                              variant: "small-card-mobile",
                              style: {
                                display: "flex", "box-sizing": "border-box", visibility: "visible", height: "110px", width: "110px", "justify-content": "center", border: "1px solid rgb(203, 203, 203)", "border-radius": "8px", "background-color": "rgb(255, 255, 255)", "box-shadow": "rgba(0, 0, 0, 0.1) 0px 10px 20px 0px", cursor: "pointer",
                              },
                            },

                            m(
                              "button",
                              {
                                style: {
                                  padding: "16px", "box-sizing": "border-box", border: "0px none rgb(51, 51, 51)", cursor: "pointer", margin: "0px", overflow: "visible", background: "rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box", color: "rgb(51, 51, 51)", appearance: "none", display: "flex", "flex-direction": "column", "align-items": "center", "justify-content": "flex-start", "text-decoration": "none solid rgb(51, 51, 51)", width: "100%", height: "20px",
                                },
                              },
                              [
                                m(
                                  "figure",
                                  {
                                    style: {
                                      "box-sizing": "border-box", margin: "0px", display: "flex", "align-items": "center", "text-align": "center", "justify-content": "center", "max-width": "60px", "max-height": "60px",
                                    },
                                  },
                                  m("img", {
                                    slot: "header-img",
                                    src: i.img,
                                    alt: "XS",
                                    style: {
                                      height: "40px", width: "160px", "box-sizing": "border-box",
                                    },
                                  })
                                ),
                                m(
                                  "div",
                                  {
                                    style: {
                                      "box-sizing": "border-box", margin: "0px", display: "flex", "flex-direction": "column", "align-items": "center", "text-align": "center", "justify-content": "center",
                                    },
                                  },
                                  [
                                    m(
                                      "h3",
                                      {
                                        slot: "title",
                                        style: {
                                          "font-size": "14px", "line-height": "24px", "box-sizing": "border-box", margin: "0px", padding: "0px", "font-weight": "400", color: "rgb(51, 51, 51)", "text-align": "center", "white-space": "nowrap", },
                                      },
                                      i.textoHasta
                                    ),
                                    m(
                                      "h3",
                                      {
                                        slot: "description",
                                        style: {
                                          "font-size": "10px", "box-sizing": "border-box", margin: "0px", padding: "0px", "font-weight": "400", color: "rgb(51, 51, 51)", "text-align": "center", "white-space": "nowrap",
                                        },
                                      },
                                      i.textoDimension
                                    ),
                                  ]
                                ),
                              ]
                            )
                          ),
                        ),
                      ]
                    ),
                  ]
                ),
                m(
                  "div",
                  {
                    style: {
                      "box-sizing": "border-box", "margin-top": "24px", display: "flex", gap: "16px 24px",
                    },
                  },
                  [
                    m(
                      "correos-ui-button",
                      {
                        "full-width": "",
                        theme: "primary",
                        form: "",
                        style: {
                          "box-sizing": "border-box", visibility: "visible", display: "block",
                        },
                      },
                      m(
                        "div",
                        {
                          style: {
                            "box-sizing": "border-box",
                            display: "inline",
                          },
                        },
                        m(
                          "correos-ui-button",
                          {
                            theme: "primary",
                            type: "text",
                            "href-link":
                              "https://www.correos.es/es/es/particulares/enviar/envios-nacionales/envios-economicos/servicio-especial-de-paqueteria?utm_source=site_cor_ces&amp;utm_medium=banner&amp;utm_campaign=Corr_Jun24_paquetB2C&amp;utm_term=home&amp;utm_content=part",
                            target: "_self",
                            style: {
                              visibility: "visible",
                              "margin-right": "24px",
                              "margin-top": "16px",
                              display: "block",
                            },
                          },
                          m(
                            "a",
                            {
                              href: "#",
                              target: "_self",
                              style: {
                                "min-width": "128px",
                                "font-size": "16px",
                                "line-height": "24px",
                                color: "rgb(0, 46, 109)",
                                "background-color": "rgb(255, 205, 0)",
                                "border-color": "rgb(179, 143, 0)",
                                height: "55.9922px",
                                border: "1.5px solid rgb(179, 143, 0)",
                                "font-weight": "700",
                                "border-radius": "8px",
                                padding: "0px 24px",
                                "text-decoration": "none solid rgb(0, 46, 109)",
                                display: "inline-flex",
                                "align-items": "center",
                                "justify-content": "center",
                                transition: "background-color 0.3s, color 0.3s", // Agregamos transición
                              },
                              onmouseover: function (e) {
                                e.currentTarget.style.backgroundColor = "rgb(200, 180, 0)"; // Color al pasar el ratón
                              },
                              onmouseout: function (e) {
                                e.currentTarget.style.backgroundColor = "rgb(255, 205, 0)"; // Color original
                              },
                            },
                            "COMENZAR ENVÍO"
                          )
                        )
                      )
                      
                    ),
                    m(
                      "correos-ui-button",
                      {
                        "href-link":
                          "/es/es/particulares/enviar/envios-nacionales/envios-economicos/servicio-especial-de-paqueteria",
                        theme: "secondary",
                        variant: "link",
                        form: "",
                        target: "_self",
                        style: {
                          "box-sizing": "border-box", visibility: "visible", display: "block",
                        },
                      },
                      m(
                        "div",
                        {
                          style: {
                            "box-sizing": "border-box", display: "inline",
                          },
                        },
                        m(
                          "a",
                          {
                            href: "/es/es/particulares/enviar/envios-nacionales/envios-economicos/servicio-especial-de-paqueteria",
                            target: "_self",
                            style: {
                              "min-width": "auto", "font-size": "16px", "line-height": "24px", "box-sizing": "border-box", "justify-content": "flex-start", "font-weight": "700", padding: "0px", color: "rgb(0, 46, 109)", "background-color": "rgba(0, 0, 0, 0)", "border-color": "rgba(0, 0, 0, 0)", height: "56px", border: "0px none rgba(0, 0, 0, 0)", "text-transform": "none", "border-radius": "8px", "font-family": "Roboto, sans-serif", "letter-spacing": "1.42857px", "text-decoration": "none solid rgb(0, 46, 109)", display: "inline-flex", position: "relative", "align-items": "center", outline: "rgb(0, 46, 109) none 0px", "user-select": "none", appearance: "none", overflow: "visible", "vertical-align": "middle",
                            },
                          },
                          [
                            m("div", {
                              style: {
                                "box-sizing": "content-box", opacity: "0", "border-radius": "8px", top: "0px", left: "0px", position: "absolute", width: "100%", height: "56px", overflow: "hidden",
                              },
                            }),
                            m(
                              "span",
                              {
                                style: {
                                  "box-sizing": "border-box", "text-align": "start", "letter-spacing": "normal", "font-family": "Cartero, 'Helvetica Neue', Helvetica, Arial, sans-serif", margin:"30px 0px 0px 0px",
                                },
                              },
                              m(
                                "span",
                                {
                                  slot: "text",
                                  style: { "box-sizing": "border-box" },
                                },
                                " MÁS INFO >"
                              )
                            ),
                            m("i", {
                              slot: "icon-right",
                              style: {
                                "box-sizing": "border-box", display: "flex", "justify-content": "center", "align-items": "center", width: "1.5rem", height: "24px", "font-size": "24px", "font-family": "correos-icons", "font-weight": "400", "font-style": "normal", "font-variant": "normal", "text-rendering": "auto", "line-height": "24px", "margin-left": "16px",
                              },
                            }),
                          ]
                        )
                      )
                    ),
                  ]
                ),
              ])
            )
          )
        )
      ),
    ]
  }
}

function CompraEnNuestraTienda() {
  return {
    view: () => [
      m(
        "div",
        {
          style: {
            "padding-top": "40px",
            "padding-bottom": "40px",
            "box-sizing": "border-box",
          },
        },
        m(
          "div",
          {
            style: {
              "box-sizing": "border-box",
              "padding-top": "80px",
              "padding-bottom": "80px",
              "padding-left": "24px",
              "padding-right": "24px",
              "margin-left": "auto",
              "margin-right": "auto",
              "background-color": "rgb(255, 205, 0)",
            },
          },
          m("div", { slot: "block", style: { "box-sizing": "border-box" } }, [
            m(
              "correos-cdk-section-text-img",
              {
                variant: "variant6040-normal",
                distribution: "normal",
                "show-img-mobile": "true",
                "img-opacity": "false",
                "with-border": "false",
                "with-box-shadow": "false",
                "is-prepaid": "false",
                style: {
                  color: "rgb(51, 51, 51)",
                  padding: "80px 0px",
                  "box-sizing": "border-box",
                  visibility: "visible",
                  display: "block",
                  overflow: "hidden",
                },
              },
              [
                m("div", {
                  style: { "box-sizing": "border-box", "text-align": "center" },
                }),
                m(
                  "div",
                  {
                    style: {
                      gap: "24px 32px", // Espacio entre filas (24px) y columnas (32px)
                      "column-gap": "32px", // Espacio entre columnas
                      "box-sizing": "border-box",
                      display: "flex", // Espacio entre elementos
                      justifyContent: "center",
                      "flex-wrap": "wrap", // Permite que los elementos se reorganicen en varias filas
                      height: "100%",
                    },
                  },
                  [
                    m(
                      "div",
                      {
                        style: {
                          "grid-column-end": "span 7",

                          order: "1",
                          display: "block",
                          "box-sizing": "border-box",
                          width: "800px",
                        },
                      },
                      m(
                        "correos-ui-text-inf",
                        {
                          slot: "text",
                          "border-color": "var(--theme-color-yellow-plain)",
                          "bold-features-title": "true",
                          size: "md",
                          style: {
                            "box-sizing": "border-box",
                            visibility: "visible",
                            display: "block",
                          },
                        },
                        m("div", { style: { "box-sizing": "border-box" } }, [
                          m(
                            "div",
                            {
                              style: {
                                color: "rgb(51, 51, 51)",
                                "box-sizing": "border-box",
                              },
                            },
                            m(
                              "h2",
                              {
                                slot: "title",
                                style: {
                                  "border-color": "var(--theme-color-yellow-plain)", "box-sizing": "border-box", margin: "0px 0px 15px", padding: "0px 0px 16px", "border-bottom": "1px solid rgb(255, 205, 0)", "font-weight": "300", "font-size": "32px",
                                },
                              },
                              "Compra en nuestra tienda online"
                            )
                          ),
                          m(
                            "div",
                            {
                              slot: "text",
                              style: {
                                "font-size": "18px",
                                "line-height": "30px",
                                "box-sizing": "border-box",
                                margin: "0px 0px 16px",
                                padding: "0px",
                                color: "rgb(51, 51, 51)",
                                "font-weight": "300",
                              },
                            },
                            "Compra online todo lo necesario para tus envíos postales (sobres, embalajes, sellos, etc.). Además, disponemos de artículos para amantes de la filatelia, productos de Correos y regalos para sorprender a los que más quieres."
                          ),
                          m("div", { style: { "box-sizing": "border-box" } }),
                          m(
                            "div",
                            {
                              style: {
                                "box-sizing": "border-box",
                                "flex-direction": "row",
                                display: "flex",
                                "flex-wrap": "wrap",
                              },
                            },
                            m(
                              "correos-ui-button",
                              {
                                slot: "linkleft",
                                theme: "secondary",
                                variant: "link",
                                type: "text",
                                "href-link":
                                  "https://market.correos.es/category/correos",
                                target: "_blank",
                                "element-title":
                                  "Compra en nuestra tienda online",
                                "component-type": "highlight-bannerilustration",
                                "full-width": "true",
                                form: "",
                                style: {
                                  "box-sizing": "border-box",
                                  visibility: "visible",
                                  display: "block",
                                  "margin-right": "16px",
                                },
                              },
                              m(
                                "div",
                                {
                                  style: {
                                    "box-sizing": "border-box",
                                    display: "inline",
                                  },
                                },
                                m(
                                  "a",
                                  {
                                    href: "https://market.correos.es/category/correos",
                                    target: "_blank",
                                    style: {
                                      "min-width": "auto",
                                      "font-size": "16px",
                                      "line-height": "24px",
                                      "box-sizing": "border-box",
                                      "justify-content": "flex-start",
                                      "font-weight": "700",
                                      padding: "0px",
                                      width: "100%",
                                      color: "rgb(0, 46, 109)",
                                      "background-color": "rgba(0, 0, 0, 0)",
                                      "border-color": "rgba(0, 0, 0, 0)",
                                      height: "56px",
                                      border: "0px none rgba(0, 0, 0, 0)",
                                      "text-transform": "none",
                                      "border-radius": "8px",
                                      "font-family": "Roboto, sans-serif",
                                      "letter-spacing": "1.42857px",
                                      "text-decoration":
                                        "none solid rgb(0, 46, 109)",
                                      display: "inline-flex",
                                      position: "relative",
                                      "align-items": "center",
                                      outline: "rgb(0, 46, 109) none 0px",
                                      "user-select": "none",
                                      appearance: "none",
                                      overflow: "visible",
                                      "vertical-align": "middle",
                                    },
                                  },
                                  [
                                    m("div", {
                                      style: {
                                        "box-sizing": "content-box",
                                        opacity: "0",
                                        "border-radius": "8px",
                                        top: "0px",
                                        left: "0px",
                                        position: "absolute",
                                        width: "100%",
                                        height: "56px",
                                        overflow: "hidden",
                                      },
                                    }),
                                    m(
                                      "span",
                                      {
                                        style: {
                                          "box-sizing": "border-box",
                                          "text-align": "start",
                                          "letter-spacing": "normal",
                                          "font-family":
                                            "Cartero, 'Helvetica Neue', Helvetica, Arial, sans-serif",
                                        },
                                      },
                                      m(
                                        "span",
                                        {
                                          slot: "text",
                                          style: { "box-sizing": "border-box" },
                                        },
                                        "MÁS INFO   >"
                                      )
                                    ),
                                    m("i", {
                                      slot: "icon-right",
                                      style: {
                                        "box-sizing": "border-box",
                                        display: "flex",
                                        "justify-content": "center",
                                        "align-items": "center",
                                        width: "1.5rem",
                                        height: "24px",
                                        "font-size": "24px",
                                        "font-family": "correos-icons",
                                        "font-weight": "400",
                                        "font-style": "normal",
                                        "font-variant": "normal",
                                        "text-rendering": "auto",
                                        "line-height": "24px",
                                        "margin-left": "16px",
                                      },
                                    }),
                                  ]
                                )
                              )
                            )
                          ),
                        ])
                      )
                    ),
                    m(
                      "div",
                      {
                        style: {
                          "grid-column-end": "span 5",
                          order: "2",
                          padding: "0px 32px",
                          "box-sizing": "border-box",
                          position: "relative",
                        },
                      },
                      [
                        m(
                          "correos-cdk-imageblock",
                          {
                            slot: "img",
                            "url-image":
                              "/content/dam/correos/imagenes/ilustraciones/big/ecommerce.svg",
                            style: {
                              "box-sizing": "border-box",
                              visibility: "visible",
                              width: "100%",
                              height: "100%",
                              display: "flex",
                              "justify-content": "center",
                              "align-items": "center",
                              position: "relative",
                            },
                          },
                          m(
                            "figure",
                            {
                              style: {
                                "box-sizing": "border-box",
                                width: "100%",
                                margin: "0px",
                                padding: "0px",
                                overflow: "hidden",
                                display: "flex",
                                "flex-direction": "column",
                                "align-items": "center",
                              },
                            },
                            m("img", {
                              src: "./img/ecommerce.svg",
                              alt: "",
                              style: {
                                "box-sizing": "border-box",
                                height: "350px",
                                width: "100%",
                                "min-height": "0px",
                              },
                            })
                          )
                        ),
                        m("div", {
                          style: {
                            bottom: "0px",
                            "box-sizing": "border-box",
                            position: "absolute",
                            right: "0px",
                            width: "25%",
                          },
                        }),
                      ]
                    ),
                  ]
                ),
              ]
            ),
          ])
        )
      ),
    ],
  };

  function Item() {
    return {
      view: ({ attrs }) =>
        m("div", [
          m("img", {
            src: attrs.img,
          }),
          m("h1", attrs.titulo),
          m("p", attrs.descripcion),
        ]),
    };
  }
}

function MasDe100Mil() {
  return {
    view: () => [
      m(
        "div",
        {
          style: {
            "background-color": "white",
            padding: "140px 30px 30px",
            "box-sizing": "border-box",
          },
        },
        [
          m(
            "correos-cdk-full-content-photo",
            {
              "bg-image": "./img/envio-dinero-banner-web-correos",
              "decorator-alt": "",
              theme: "inverse",
              variant: "with-decorator",
              size: "lg",
              style: {
                "box-sizing": "border-box",
                visibility: "visible",
                width: "100%",
                "flex-direction": "row-reverse",
                "padding-left": "149.5px",
                padding: "0px 0px 0px 85.5px",
                display: "flex",
                "margin-left": "30px",
                position: "relative",
              },
            },
            [
              m("div", {
                id: "imagenMasDe100Mil",
                style: {
                  "background-image":
                    "url('./img/envio-dinero-banner-web-correos.jpg')",
                  "box-sizing": "border-box",
                  "background-repeat": "no-repeat",
                  "background-size": "cover",
                  "background-position": "50% 50%",
                  flex: "1 1 50%",
                  "border-radius": "8px",
                },
              }),
              m(
                "div",
                {
                  style: {
                    "box-sizing": "border-box",
                    "padding-bottom": "73.6px",
                    flex: "1 1 50%",
                  },
                },
                m(
                  "div",
                  {
                    style: {
                      "box-sizing": "border-box",
                      "max-width": "none",
                      left: "0px",
                      width: "124%",
                      padding: "48px 112px",
                      height: "400px",
                      position: "relative",
                      display: "flex",
                      "align-items": "center",
                      border: "1px solid rgb(203, 203, 203)",
                      "border-radius": "8px",
                      "background-color": "rgb(255, 255, 255)",
                      "box-shadow": "rgba(0, 0, 0, 0.1) 0px 10px 20px 0px",
                    },
                  },
                  [
                    m(
                      "div",
                      {
                        slot: "textblock",
                        style: {
                          "box-sizing": "border-box",
                          "max-width": "640px",
                          width: "100%",
                          "margin-left": "auto",
                          "margin-right": "auto",
                        },
                      },
                      m(
                        "correos-ui-text-inf",
                        {
                          "border-color": "var(--theme-color-yellow-plain)",
                          "bold-features-title": "true",
                          size: "md",
                          style: {
                            "box-sizing": "border-box",
                            visibility: "visible",
                            display: "block",
                          },
                        },
                        m("div", { style: { "box-sizing": "border-box" } }, [
                          m(
                            "div",
                            {
                              style: {
                                color: "var(--_ui-text-inf-color-title)", "box-sizing": "border-box",
                              },
                            },
                            m(
                              "h2",
                              {
                                slot: "title",
                                style: {
                                  "border-color": "var(--theme-color-yellow-plain)", "box-sizing": "border-box", margin: "0px 0px 15px", padding: "0px 0px 16px", "border-bottom": "1px solid rgb(255, 205, 0)", "font-weight": "300", "font-size": "32px",
                                },
                              },
                              "¡Más de 10.000 euros en premios te esperan!"
                            )
                          ),
                          m(
                            "div",
                            {
                              slot: "text",
                              id: "imagenMasDe100MilTexto",
                              style: {
                                "font-size": "18px",
                                "line-height": "30px",
                                "box-sizing": "border-box",
                                margin: "0px 0px 16px",
                                padding: "0px",
                                color: "rgb(51, 51, 51)",
                                "font-weight": "300",
                              },
                            },
                            "Consigue grandes premios por enviar y recibir dinero de cualquier parte del mundo con Western Union en las oficinas de Correos."
                          ),
                          // El resto del contenido...
                        ])
                      )
                    ),
                    // El resto del contenido...
                  ]
                )
              ),
            ]
          ),
        ]
      ),
    ],
  };
}

function SiemprePensandoEnTi2() {
  return {
    model: {
      items: [
        {
          titulo: "Gestión Aduanera",
          img: "siemprePensandoEnti1.jpg",
          texto:
            "Infórmate sobre cómo realizar los trámites aduaneros que necesitas.",
          enlace:
            "https://www.correos.es/es/es/atencion-al-cliente/informacion-aduanera",
        },
        {
          titulo: "Trámites de la DGT",
          img: "siemprePensandoEnti2.svg",
          texto:
            "Realiza tus trámites de la DGT online de forma fácil y sencilla o acércate a cualquiera de nuestras oficinas.",
          enlace:
            "https://www.correos.es/es/es/atencion-al-cliente/informacion-aduanera",
        },
        {
          titulo: "Trámites con la Administración Pública",
          img: "siemprePensandoEnti3.svg",
          texto: "Haz tus trámites de forma rápida y segura.",
          enlace:
            "https://www.correos.es/es/es/atencion-al-cliente/informacion-aduanera",
        },
      ],
    },
    view: () => [
      //padre1
      m(
        "section",
        {
          style: {
            display: "flex",
            "flex-wrap": "wrap",
            "justify-content": "space-between",
            margin: "50px auto",
            height: "500px",
            width: "80%",
          },
        },
        this.state.model.items.map((i) => m(Box, i))
      ),
    ],
  };

  function Box() {
    return {
      view: ({ attrs }) =>
        m(
          "div",
          {
            style: {
              "border-radius": "10px",
              flex: "1 1 375px",
              "max-width": "375px",
              "box-shadow": "0 0 20px #b0abaa ",
              height: "100%",
              "margin-top": "10px ",
            },
          },
          [
            m("img", {
              src: `img/${attrs.img}`,
              style: {
                height: "40%",
                padding: "10px",
                "background-repeat": "no-repeat",
                "background-size": "50%",
                "background-position": "center",
              },
            }),

            m(
              "div",
              {
                style: {
                  width: "90%",
                  margin: "auto",
                  height: "10%",
                  color: "black",
                  "font-weight": "700",
                  "font-size": "30px",
                  "font-size": "24px",
                  border: "2px none",
                },
              },
              attrs.titulo
            ),

            m(
              "div",
              {
                style: {
                  width: "90%",
                  margin: "auto",
                  height: "30%",
                  color: "black",
                  "font-size": "16px",
                  "font-weight": "400",
                  "font-size": "16px",
                },
              },
              attrs.texto
            ),

            m(
              "a",
              {
                href: "",
                style: {
                  width: "90%",
                  "padding-left": "10%",
                  height: "10%",
                  "font-size": "20px",
                  "font-weight": "bold",
                  "text-decoration": "none",
                  cursor: "hover",
                },
              },
              "MAS INFO"
            ),
          ]
        ),
    };
  }
}

function EstasEsperando() {
  return {
    view: () => [
      m(
        "div", // Div contenedor con fondo gris
        {
          style: {
            "background-color": "#F3F2F2", // Fondo gris
            padding: "140px 30px 30px", // Espaciado alrededor del contenido, opcional
            "box-sizing": "border-box",
          },
        },
        [
          m(
            "correos-cdk-full-content-photo",
            {
              "bg-image": "./img/home-particulares.PNG",
              "decorator-src": "./img/deco_bars.svg",
              "decorator-alt": "",
              theme: "inverse",
              variant: "with-decorator",
              size: "lg",
              style: {
                "box-sizing": "border-box",
                visibility: "visible",
                width: "100%",
                "flex-direction": "row-reverse",
                "padding-left": "149.5px",
                padding: "0px 0px 0px 85.5px",
                display: "flex",
                "margin-left": "30px",
                position: "relative",
              },
            },
            [
              m("div", {
                style: {
                  "background-image": "url('./img/home-particulares.PNG')",
                  "box-sizing": "border-box",
                  "background-repeat": "no-repeat",
                  "background-size": "cover",
                  "background-position": "50% 50%",
                  flex: "1 1 50%",
                  "border-radius": "8px",
                },
              }),
              m(
                "div",
                {
                  style: {
                    "box-sizing": "border-box",
                    "padding-bottom": "73.6px",
                    flex: "1 1 50%",
                  },
                },
                m(
                  "div",
                  {
                    style: {
                      "box-sizing": "border-box",
                      "max-width": "none",
                      left: "0px",
                      width: "124%",
                      padding: "48px 112px",
                      height: "279.672px",
                      position: "relative",
                      display: "flex",
                      "align-items": "center",
                      border: "1px solid rgb(203, 203, 203)",
                      "border-radius": "8px",
                      "background-color": "rgb(255, 255, 255)",
                      "box-shadow": "rgba(0, 0, 0, 0.1) 0px 10px 20px 0px",
                    },
                  },
                  [
                    m(
                      "div",
                      {
                        slot: "textblock",
                        style: {
                          "box-sizing": "border-box",
                          "max-width": "640px",
                          width: "100%",
                          "margin-left": "auto",
                          "margin-right": "auto",
                        },
                      },
                      m(
                        "correos-ui-text-inf",
                        {
                          "border-color": "var(--theme-color-yellow-plain)",
                          "bold-features-title": "true",
                          size: "md",
                          style: {
                            "box-sizing": "border-box",
                            visibility: "visible",
                            display: "block",
                          },
                        },
                        m("div", { style: { "box-sizing": "border-box" } }, [
                          m(
                            "div",
                            {
                              style: {
                                color: "var(--_ui-text-inf-color-title)",
                                "box-sizing": "border-box",
                              },
                            },
                            m(
                              "h2",
                              {
                                slot: "title",
                                style: {
                                  "border-color": "var(--theme-color-yellow-plain)", "box-sizing": "border-box", margin: "0px 0px 15px", padding: "0px 0px 16px", "border-bottom": "1px solid rgb(255, 205, 0)", "font-weight": "300", "font-size": "32px",
                                },
                              },
                              "¿Estás esperando un envío?"
                            )
                          ),
                          m(
                            "div",
                            {
                              slot: "text",
                              style: {
                                "font-size": "18px",
                                "line-height": "30px",
                                "box-sizing": "border-box",
                                margin: "0px 0px 16px",
                                padding: "0px",
                                color: "rgb(51, 51, 51)",
                                "font-weight": "300",
                              },
                            },
                            "Aquí encontrarás todo lo que necesitas saber sobre el envío que estás esperando."
                          ),
                          m("div", { style: { "box-sizing": "border-box" } }),
                          m(
                            "div",
                            {
                              style: {
                                "box-sizing": "border-box",
                                "flex-direction": "row",
                                display: "flex",
                                "flex-wrap": "wrap",
                              },
                            },
                            m(
                              "correos-ui-button",
                              {
                                slot: "linkleft",
                                theme: "secondary",
                                variant: "link",
                                type: "text",
                                "href-link": "/es/es/particulares/recibir",
                                target: "_self",
                                "element-title": "¿Estás esperando un envío?",
                                "component-type": "highlight-bannerimage",
                                "full-width": "true",
                                form: "",
                                style: {
                                  "box-sizing": "border-box",
                                  visibility: "visible",
                                  display: "block",
                                  "margin-right": "16px",
                                },
                              },
                              m(
                                "div",
                                {
                                  style: {
                                    "box-sizing": "border-box",
                                    display: "inline",
                                  },
                                },
                                m(
                                  "a",
                                  {
                                    href: "/es/es/particulares/recibir",
                                    target: "_self",
                                    style: {
                                      "min-width": "auto",
                                      "font-size": "16px",
                                      "line-height": "24px",
                                      "box-sizing": "border-box",
                                      "justify-content": "flex-start",
                                      "font-weight": "700",
                                      padding: "0px",
                                      width: "100%",
                                      color: "rgb(0, 46, 109)",
                                      "background-color": "rgba(0, 0, 0, 0)",
                                      "border-color": "rgba(0, 0, 0, 0)",
                                      height: "56px",
                                      border: "0px none rgba(0, 0, 0, 0)",
                                      "text-transform": "none",
                                      "border-radius": "8px",
                                      "font-family": "Roboto, sans-serif",
                                      "letter-spacing": "1.42857px",
                                      "text-decoration":
                                        "none solid rgb(0, 46, 109)",
                                      display: "inline-flex",
                                      position: "relative",
                                      "align-items": "center",
                                      outline: "rgb(0, 46, 109) none 0px",
                                      "user-select": "none",
                                      appearance: "none",
                                      overflow: "visible",
                                      "vertical-align": "middle",
                                    },
                                  },
                                  [
                                    m("div", {
                                      style: {
                                        "box-sizing": "content-box",
                                        opacity: "0",
                                        "border-radius": "8px",
                                        top: "0px",
                                        left: "0px",
                                        position: "absolute",
                                        width: "100%",
                                        height: "56px",
                                        overflow: "hidden",
                                      },
                                    }),
                                    m(
                                      "span",
                                      {
                                        style: {
                                          "box-sizing": "border-box",
                                          "text-align": "start",
                                          "letter-spacing": "normal",
                                          "font-family":
                                            "Cartero, 'Helvetica Neue', Helvetica, Arial, sans-serif",
                                        },
                                      },
                                      m(
                                        "span",
                                        {
                                          slot: "text",
                                          style: { "box-sizing": "border-box" },
                                        },
                                        "MÁS INFO"
                                      )
                                    ),
                                    m("i", {
                                      slot: "icon-right",
                                      style: {
                                        "box-sizing": "border-box",
                                        display: "flex",
                                        "justify-content": "center",
                                        "align-items": "center",
                                        width: "1.5rem",
                                        height: "24px",
                                        "font-size": "24px",
                                        "font-family": "correos-icons",
                                        "font-weight": "400",
                                        "font-style": "normal",
                                        "font-variant": "normal",
                                        "text-rendering": "auto",
                                        "line-height": "24px",
                                        "margin-left": "16px",
                                      },
                                    }),
                                  ]
                                )
                              )
                            )
                          ),
                        ])
                      )
                    ),
                    m(
                      "div",
                      {
                        style: {
                          "box-sizing": "border-box",
                          left: "-304px",
                          display: "block",
                          position: "absolute",
                          bottom: "-72px",
                          right: "-304px",
                          "pointer-events": "none",
                        },
                      },
                      m(
                        "figure",
                        {
                          style: {
                            "box-sizing": "border-box",
                            margin: "0px",
                            padding: "0px",
                            border: "0px none rgb(51, 51, 51)",
                            font: "16px / 23.84px Cartero, 'Helvetica Neue', Helvetica, Arial, sans-serif",
                            "vertical-align": "baseline",
                          },
                        },
                        m("img", {
                          src: "./img/deco_bars.svg",
                          alt: "",
                          style: { "box-sizing": "border-box" },
                        })
                      )
                    ),
                  ]
                )
              ),
            ]
          ),
        ]
      ),
    ],
  };
}

function QuieresHacerUnEnvio() {
  return {
    view: () => [
      m(
        "div",
        {
          style: {
            "padding-top": "40px",
            "padding-bottom": "40px",
            "box-sizing": "border-box",
          },
        },
        m(
          "div",
          { style: { "box-sizing": "border-box" } },
          m("div", { slot: "block", style: { "box-sizing": "border-box" } }, [
            m(
              "correos-ui-title-center",
              {
                "hide-default-margin": "true",
                variant: "normal",
                style: {
                  "box-sizing": "border-box", visibility: "visible", display: "block", width: "100%", "--_ui-title-center-background-color": "1",
                },
              },
              m(
                "div",
                {
                  style: {
                    "box-sizing": "border-box",
                    display: "flex",
                    "justify-content": "center",
                    width: "100%",
                  },
                },
                m("h2", {
                  slot: "h2-title",
                  style: {
                    "font-size": "40px",
                    "line-height": "56px",
                    "box-sizing": "border-box",
                  },
                })
              )
            ),
            m(
              "correos-cdk-full-content-photo",
              {
                "bg-image": "img/criptosello-web-correos.jpg",
                "decorator-src": "img/deco_bars.svg",
                "decorator-alt": "",
                variant: "with-decorator",
                size: "lg",
                style: {
                  "box-sizing": "border-box", visibility: "visible", padding: "0px", width: "100%", display: "flex", "margin-left": "0px", position: "relative", "overflow-x": "hidden",
                },
              },
              [
                m("div", {
                  style: {
                    "background-image": "url('img/Sobres-y-cajas.jpg')",
                    "box-sizing": "border-box",
                    "background-repeat": "no-repeat",
                    "background-size": "cover",
                    "background-position": "50% 50%",
                    flex: "1 1 50%",
                    "border-radius": "8px",
                  },
                }),
                m(
                  "div",
                  {
                    style: {
                      "box-sizing": "border-box",
                      "padding-bottom": "73.6px",
                      flex: "1 1 50%",
                    },
                  },
                  m(
                    "div",
                    {
                      style: {
                        "box-sizing": "border-box",
                        "max-width": "803px",
                        width: "calc(100% - 24px + 9rem)",
                        left: "-144px",
                        padding: "48px 112px",
                        height: "339.672px",
                        position: "relative",
                        display: "flex",
                        "align-items": "center",
                        border: "1px solid rgb(203, 203, 203)",
                        "border-radius": "8px",
                        "background-color": "rgb(255, 255, 255)",
                        "box-shadow": "rgba(0, 0, 0, 0.1) 0px 10px 20px 0px",
                      },
                    },
                    [
                      m(
                        "div",
                        {
                          slot: "textblock",
                          style: {
                            "box-sizing": "border-box",
                            "max-width": "640px",
                            width: "100%",
                            "margin-left": "auto",
                            "margin-right": "auto",
                          },
                        },
                        m(
                          "correos-ui-text-inf",
                          {
                            "border-color": "var(--theme-color-yellow-plain)",
                            "bold-features-title": "true",
                            size: "md",
                            style: {
                              "box-sizing": "border-box", visibility: "visible", display: "block",
                            },
                          },
                          m("div", { style: { "box-sizing": "border-box" } }, [
                            m(
                              "div",
                              {
                                style: {
                                  color: "var(--_ui-text-inf-color-title)",
                                  "box-sizing": "border-box",
                                },
                              },
                              m(
                                "h2",
                                {
                                  slot: "title",
                                  style: {
                                    "border-color": "var(--theme-color-yellow-plain)", "box-sizing": "border-box", margin: "0px 0px 15px", padding: "0px 0px 16px", "border-bottom": "1px solid rgb(255, 205, 0)", "font-weight": "300", "font-size": "32px",
                                  },
                                },
                                "¿Quieres hacer un envío?"
                              )
                            ),
                            m(
                              "div",
                              {
                                slot: "text",
                                style: {
                                  "font-size": "18px",
                                  "line-height": "30px",
                                  "box-sizing": "border-box",
                                  margin: "0px 0px 16px",
                                  padding: "0px",
                                  color: "rgb(51, 51, 51)",
                                  "font-weight": "300",
                                },
                              },
                              [
                                "Descubre el primer",
                                m.trust("&nbsp;"),
                                "criptosello",
                                m.trust("&nbsp;"),
                                "Todo lo que necesitas saber para realizar un envío del tipo que sea.",
                              ]
                            ),
                            m("div", { style: { "box-sizing": "border-box" } }),
                            m(
                              "div",
                              {
                                style: {
                                  "box-sizing": "border-box",
                                  "flex-direction": "row",
                                  display: "flex",
                                  "flex-wrap": "wrap",
                                },
                              },
                              m(
                                "correos-ui-button",
                                {
                                  slot: "linkleft",
                                  theme: "secondary",
                                  variant: "link",
                                  type: "text",
                                  "href-link":
                                    "https://filatelia.correos.es/es/es/rincon-correos/filatelia/productos/criptosellos/2024/mortadelo?utm_source=site_cor_ces&amp;utm_medium=banner&amp;utm_campaign=Corr_criptosello_Oct24&amp;utm_term=home",
                                  target: "_self",
                                  "element-title":
                                    "Criptosello - Mortadelo 2024",
                                  "component-type": "highlight-bannerimage",
                                  "full-width": "true",
                                  form: "",
                                  style: {
                                    "box-sizing": "border-box",
                                    visibility: "visible",
                                    display: "block",
                                    "margin-right": "16px",
                                  },
                                },
                                m(
                                  "div",
                                  {
                                    style: {
                                      "box-sizing": "border-box",
                                      display: "inline",
                                    },
                                  },
                                  m(
                                    "a",
                                    {
                                      href: "https://filatelia.correos.es/es/es/rincon-correos/filatelia/productos/criptosellos/2024/mortadelo?utm_source=site_cor_ces&amp;utm_medium=banner&amp;utm_campaign=Corr_criptosello_Oct24&amp;utm_term=home",
                                      target: "_self",
                                      style: {
                                        "min-width": "auto", "font-size": "16px", "line-height": "24px", "box-sizing": "border-box", "justify-content": "flex-start", "font-weight": "700", padding: "0px", width: "100%", color: "rgb(0, 46, 109)", "background-color": "rgba(0, 0, 0, 0)", "border-color": "rgba(0, 0, 0, 0)", height: "56px", border: "0px none rgba(0, 0, 0, 0)", "text-transform": "none", "border-radius": "8px", "font-family": "Roboto, sans-serif", "-webkit-font-smoothing": "antialiased", "letter-spacing": "1.42857px", "text-decoration": "none solid rgb(0, 46, 109)", display: "inline-flex", position: "relative", "align-items": "center", outline: "rgb(0, 46, 109) none 0px", "user-select": "none", appearance: "none", overflow: "visible", "vertical-align": "middle",
                                      },
                                    },
                                    [
                                      m("div", {
                                        style: {
                                          "box-sizing": "content-box",
                                          opacity: "0",
                                          "border-radius": "8px",
                                          top: "0px",
                                          left: "0px",
                                          position: "absolute",
                                          width: "100%",
                                          height: "56px",
                                          overflow: "hidden",
                                        },
                                      }),
                                      m(
                                        "span",
                                        {
                                          style: {
                                            "box-sizing": "border-box",
                                            "text-align": "start",
                                            "letter-spacing": "normal",
                                            "font-family":
                                              "Cartero, 'Helvetica Neue', Helvetica, Arial, sans-serif",
                                          },
                                        },
                                        m(
                                          "span",
                                          {
                                            slot: "text",
                                            style: {
                                              "box-sizing": "border-box",
                                            },
                                          },
                                          "MÁS INFO"
                                        )
                                      ),
                                      m("i", {
                                        slot: "icon-right",
                                        style: {
                                          "box-sizing": "border-box",
                                          display: "flex",
                                          "justify-content": "center",
                                          "align-items": "center",
                                          width: "1.5rem",
                                          height: "24px",
                                          "font-size": "24px",
                                          "font-family": "correos-icons",
                                          "font-weight": "400",
                                          "font-style": "normal",
                                          "font-variant": "normal",
                                          "text-rendering": "auto",
                                          "line-height": "24px",
                                          "-webkit-font-smoothing":
                                            "antialiased",
                                          "margin-left": "16px",
                                        },
                                      }),
                                    ]
                                  )
                                )
                              )
                            ),
                          ])
                        )
                      ),
                      m(
                        "div",
                        {
                          style: {
                            "box-sizing": "border-box",
                            display: "block",
                            position: "absolute",
                            bottom: "-72px",
                            right: "-304px",
                            "pointer-events": "none",
                          },
                        },
                        m(
                          "figure",
                          {
                            style: {
                              "box-sizing": "border-box",
                              margin: "0px",
                              padding: "0px",
                              border: "0px none rgb(51, 51, 51)",
                              font: "16px / 23.84px Cartero, 'Helvetica Neue', Helvetica, Arial, sans-serif",
                              "vertical-align": "baseline",
                            },
                          },
                          m("img", {
                            src: "./img/deco_03.svg",
                            alt: "",
                            style: { "box-sizing": "border-box" },
                          })
                        )
                      ),
                    ]
                  )
                ),
              ]
            ),
          ])
        )
      ),
    ],
  };
}

function ViajaYDisfruta() {
  return {
    model: {
      items: [
        {
          img: "./img/agentesturisticos.jpg",
          titulo: "Viaja y disfruta con Correos",
          texto:
            "En Correos te acompañamos en toda tu experiencia del Camino de Santiago para que puedas disfrutar al máximo. Descubre todo tipo de experiencias, viajes y regalos que tenemos para ti, además te llevamos a casa los productos que compres en nuestra web.",
        },
        {
          img: "./img/oficina2.jpg",
          titulo: "¿Quieres comprar en nuestras tiendas o enviar dinero?",
          texto:
            "Tenemos todo tipo de productos que te ayudarán a realizar estas gestiones más fácilmente.",
        },
      ],
    },

    view: () => [
      m(
        "section",
        {
          style: {
            display: "flex",
            "flex-wrap": "wrap",
            "justify-content": "space-between",
            margin: "50px auto",
            height: "500px",
            width: "80%",
          },
        },
        this.state.model.items.map((i) => m(BoxViajaYDisfruta, i))
      ),
    ],
  };
}

function DescubreActualidad() {
  return {
    view: () => [
      m(
        "div", // Div contenedor con fondo gris
        {
          style: {
            "background-color": "white", // Fondo gris
            padding: "140px 30px 30px", // Espaciado alrededor del contenido, opcional
            "box-sizing": "border-box",
          },
        },
        [
          m(
            "correos-cdk-full-content-photo",
            {
              "bg-image": "./img/home-particulares.PNG",
              "decorator-src": "./deco_03.svg",
              "decorator-alt": "",
              theme: "inverse",
              variant: "with-decorator",
              size: "lg",
              style: {
                "box-sizing": "border-box",
                visibility: "visible",
                width: "100%",
                "flex-direction": "row-reverse",
                "padding-left": "149.5px",
                padding: "0px 0px 0px 85.5px",
                display: "flex",
                "margin-left": "30px",
                position: "relative",
              },
            },
            [
              m("div", {
                style: {
                  "background-image": "url('./img/ilustracion-blog.jpg')",
                  "box-sizing": "border-box",
                  "background-repeat": "no-repeat",
                  "background-size": "cover",
                  "background-position": "50% 50%",
                  flex: "1 1 50%",
                  "border-radius": "8px",
                },
              }),
              m(
                "div",
                {
                  style: {
                    "box-sizing": "border-box",
                    "padding-bottom": "73.6px",
                    flex: "1 1 50%",
                  },
                },
                m(
                  "div",
                  {
                    style: {
                      "box-sizing": "border-box",
                      "max-width": "none",
                      left: "0px",
                      width: "124%",
                      padding: "48px 112px",
                      height: "500px",
                      position: "relative",
                      display: "flex",
                      "align-items": "center",
                      border: "1px solid rgb(203, 203, 203)",
                      "border-radius": "8px",
                      "background-color": "rgb(255, 255, 255)",
                      "box-shadow": "rgba(0, 0, 0, 0.1) 0px 10px 20px 0px",
                    },
                  },
                  [
                    m(
                      "div",
                      {
                        slot: "textblock",
                        style: {
                          "box-sizing": "border-box",
                          "max-width": "640px",
                          width: "100%",
                          "margin-left": "auto",
                          "margin-right": "auto",
                        },
                      },
                      m(
                        "correos-ui-text-inf",
                        {
                          "border-color": "var(--theme-color-yellow-plain)",
                          "bold-features-title": "true",
                          size: "md",
                          style: {
                            "box-sizing": "border-box",
                            visibility: "visible",
                            display: "block",
                          },
                        },
                        m("div", { style: { "box-sizing": "border-box" } }, [
                          m(
                            "div",
                            {
                              style: {
                                color: "var(--_ui-text-inf-color-title)",
                                "box-sizing": "border-box",
                              },
                            },
                            m(
                              "h2",
                              {
                                slot: "title",
                                style: {
                                  "border-color": "var(--theme-color-yellow-plain)", "box-sizing": "border-box", margin: "0px 0px 15px", padding: "0px 0px 16px", "border-bottom": "1px solid rgb(255, 205, 0)", "font-weight": "300", "font-size": "32px",
                                },
                              },
                              "Descubre Actualidad, el Blog de Correos"
                            )
                          ),
                          m(
                            "div",
                            {
                              slot: "text",
                              style: {
                                "font-size": "18px",
                                "line-height": "30px",
                                "box-sizing": "border-box",
                                margin: "0px 0px 16px",
                                padding: "0px",
                                color: "rgb(51, 51, 51)",
                                "font-weight": "300",
                              },
                            },
                            "Noticias, lanzamientos, servicios, curiosidades, consejos... En Correos no queremos que te pierdas nada, así que hemos pensado mucho lo que más puede ayudarte en tu día a día para que nuestro blog tenga una utilidad real. ¿Te apuntas a leerlo?"
                          ),
                          m("div", { style: { "box-sizing": "border-box" } }),
                          m(
                            "div",
                            {
                              style: {
                                "box-sizing": "border-box",
                                "flex-direction": "row",
                                display: "flex",
                                "flex-wrap": "wrap",
                              },
                            },
                            m(
                              "correos-ui-button",
                              {
                                slot: "linkleft",
                                theme: "secondary",
                                variant: "link",
                                type: "text",
                                "href-link": "/es/es/particulares/recibir",
                                target: "_self",
                                "element-title": "¿Estás esperando un envío?",
                                "component-type": "highlight-bannerimage",
                                "full-width": "true",
                                form: "",
                                style: {
                                  "box-sizing": "border-box",
                                  visibility: "visible",
                                  display: "block",
                                  "margin-right": "16px",
                                },
                              },
                              m(
                                "div",
                                {
                                  style: {
                                    "box-sizing": "border-box",
                                    display: "inline",
                                  },
                                },
                                m(
                                  "a",
                                  {
                                    href: "/es/es/particulares/recibir",
                                    target: "_self",
                                    style: {
                                      "min-width": "auto",
                                      "font-size": "16px",
                                      "line-height": "24px",
                                      "box-sizing": "border-box",
                                      "justify-content": "flex-start",
                                      "font-weight": "700",
                                      padding: "0px",
                                      width: "100%",
                                      color: "rgb(0, 46, 109)",
                                      "background-color": "rgba(0, 0, 0, 0)",
                                      "border-color": "rgba(0, 0, 0, 0)",
                                      height: "56px",
                                      border: "0px none rgba(0, 0, 0, 0)",
                                      "text-transform": "none",
                                      "border-radius": "8px",
                                      "font-family": "Roboto, sans-serif",
                                      "letter-spacing": "1.42857px",
                                      "text-decoration":
                                        "none solid rgb(0, 46, 109)",
                                      display: "inline-flex",
                                      position: "relative",
                                      "align-items": "center",
                                      outline: "rgb(0, 46, 109) none 0px",
                                      "user-select": "none",
                                      appearance: "none",
                                      overflow: "visible",
                                      "vertical-align": "middle",
                                    },
                                  },
                                  [
                                    m("div", {
                                      style: {
                                        "box-sizing": "content-box",
                                        opacity: "0",
                                        "border-radius": "8px",
                                        top: "0px",
                                        left: "0px",
                                        position: "absolute",
                                        width: "100%",
                                        height: "56px",
                                        overflow: "hidden",
                                      },
                                    }),
                                    m(
                                      "span",
                                      {
                                        style: {
                                          "box-sizing": "border-box",
                                          "text-align": "start",
                                          "letter-spacing": "normal",
                                          "font-family":
                                            "Cartero, 'Helvetica Neue', Helvetica, Arial, sans-serif",
                                        },
                                      },
                                      m(
                                        "span",
                                        {
                                          slot: "text",
                                          style: { "box-sizing": "border-box" },
                                        },
                                        "QUIERO LEERLO!"
                                      )
                                    ),
                                    m("i", {
                                      slot: "icon-right",
                                      style: {
                                        "box-sizing": "border-box",
                                        display: "flex",
                                        "justify-content": "center",
                                        "align-items": "center",
                                        width: "1.5rem",
                                        height: "24px",
                                        "font-size": "24px",
                                        "font-family": "correos-icons",
                                        "font-weight": "400",
                                        "font-style": "normal",
                                        "font-variant": "normal",
                                        "text-rendering": "auto",
                                        "line-height": "24px",
                                        "margin-left": "16px",
                                      },
                                    }),
                                  ]
                                )
                              )
                            )
                          ),
                        ])
                      )
                    ),
                    m(
                      "div",
                      {
                        style: {
                          "box-sizing": "border-box",
                          left: "-304px",
                          display: "block",
                          position: "absolute",
                          bottom: "-72px",
                          right: "-304px",
                          "pointer-events": "none",
                        },
                      },
                      m(
                        "figure",
                        {
                          style: {
                            "box-sizing": "border-box",
                            margin: "0px",
                            padding: "0px",
                            border: "0px none rgb(51, 51, 51)",
                            font: "16px / 23.84px Cartero, 'Helvetica Neue', Helvetica, Arial, sans-serif",
                            "vertical-align": "baseline",
                          },
                        },
                        m("img", {
                          src: "./img/deco_03.svg",
                          alt: "",
                          style: { "box-sizing": "border-box" },
                        })
                      )
                    ),
                  ]
                )
              ),
            ]
          ),
        ]
      ),
    ],
  };
}

function Criptosello() {
  return {
    view: () => [
      m(
        "div",
        {
          style: {
            "padding-top": "40px",
            "padding-bottom": "40px",
            "box-sizing": "border-box",
          },
        },
        m(
          "div",
          { style: { "box-sizing": "border-box" } },
          m("div", { slot: "block", style: { "box-sizing": "border-box" } }, [
            m(
              "correos-ui-title-center",
              {
                "hide-default-margin": "true",
                variant: "normal",
                style: {
                  "box-sizing": "border-box", visibility: "visible", display: "block", width: "100%", "--_ui-title-center-background-color": "1",
                },
              },
              m(
                "div",
                {
                  style: {
                    "box-sizing": "border-box",
                    display: "flex",
                    "justify-content": "center",
                    width: "100%",
                  },
                },
                m("h2", {
                  slot: "h2-title",
                  style: {
                    "font-size": "40px",
                    "line-height": "56px",
                    "box-sizing": "border-box",
                  },
                })
              )
            ),
            m(
              "correos-cdk-full-content-photo",
              {
                "bg-image": "img/criptosello-web-correos.jpg",
                "decorator-src": "img/deco_bars.svg",
                "decorator-alt": "",
                variant: "with-decorator",
                size: "lg",
                style: {
                  "box-sizing": "border-box", visibility: "visible", padding: "0px", width: "100%", display: "flex", "margin-left": "0px", position: "relative", "overflow-x": "hidden",
                },
              },
              [
                m("div", {
                  style: {
                    "background-image": "url('img/criptosello-web-correos.jpg')",
                    "box-sizing": "border-box",
                    "background-repeat": "no-repeat",
                    "background-size": "cover",
                    "background-position": "50% 50%",
                    flex: "1 1 50%",
                    "border-radius": "8px",
                  },
                }),
                m(
                  "div",
                  {
                    style: {
                      "box-sizing": "border-box",
                      "padding-bottom": "73.6px",
                      flex: "1 1 50%",
                    },
                  },
                  m(
                    "div",
                    {
                      style: {
                        "box-sizing": "border-box",
                        "max-width": "803px",
                        width: "calc(100% - 24px + 9rem)",
                        left: "-144px",
                        padding: "48px 112px",
                        height: "339.672px",
                        position: "relative",
                        display: "flex",
                        "align-items": "center",
                        border: "1px solid rgb(203, 203, 203)",
                        "border-radius": "8px",
                        "background-color": "rgb(255, 255, 255)",
                        "box-shadow": "rgba(0, 0, 0, 0.1) 0px 10px 20px 0px",
                      },
                    },
                    [
                      m(
                        "div",
                        {
                          slot: "textblock",
                          style: {
                            "box-sizing": "border-box",
                            "max-width": "640px",
                            width: "100%",
                            "margin-left": "auto",
                            "margin-right": "auto",
                          },
                        },
                        m(
                          "correos-ui-text-inf",
                          {
                            "border-color": "var(--theme-color-yellow-plain)",
                            "bold-features-title": "true",
                            size: "md",
                            style: {
                              "box-sizing": "border-box", visibility: "visible", display: "block",
                            },
                          },
                          m("div", { style: { "box-sizing": "border-box" } }, [
                            m(
                              "div",
                              {
                                style: {
                                  color: "var(--_ui-text-inf-color-title)",
                                  "box-sizing": "border-box",
                                },
                              },
                              m(
                                "h2",
                                {
                                  slot: "title",
                                  style: {
                                    "border-color": "var(--theme-color-yellow-plain)", "box-sizing": "border-box", margin: "0px 0px 15px", padding: "0px 0px 16px", "border-bottom": "1px solid rgb(255, 205, 0)", "font-weight": "300", "font-size": "32px",
                                  },
                                },
                                "Criptosello - Mortadelo 2024"
                              )
                            ),
                            m(
                              "div",
                              {
                                slot: "text",
                                style: {
                                  "font-size": "18px",
                                  "line-height": "30px",
                                  "box-sizing": "border-box",
                                  margin: "0px 0px 16px",
                                  padding: "0px",
                                  color: "rgb(51, 51, 51)",
                                  "font-weight": "300",
                                },
                              },
                              [
                                "Descubre el primer",
                                m.trust("&nbsp;"),
                                "criptosello",
                                m.trust("&nbsp;"),
                                "de Correos dedicado a Francisco Ibañez y su personaje de los mil disfraces, Mortadelo. Consíguelo ya en Correos Market.",
                              ]
                            ),
                            m("div", { style: { "box-sizing": "border-box" } }),
                            m(
                              "div",
                              {
                                style: {
                                  "box-sizing": "border-box",
                                  "flex-direction": "row",
                                  display: "flex",
                                  "flex-wrap": "wrap",
                                },
                              },
                              m(
                                "correos-ui-button",
                                {
                                  slot: "linkleft",
                                  theme: "secondary",
                                  variant: "link",
                                  type: "text",
                                  "href-link":
                                    "https://filatelia.correos.es/es/es/rincon-correos/filatelia/productos/criptosellos/2024/mortadelo?utm_source=site_cor_ces&amp;utm_medium=banner&amp;utm_campaign=Corr_criptosello_Oct24&amp;utm_term=home",
                                  target: "_self",
                                  "element-title":
                                    "Criptosello - Mortadelo 2024",
                                  "component-type": "highlight-bannerimage",
                                  "full-width": "true",
                                  form: "",
                                  style: {
                                    "box-sizing": "border-box", visibility: "visible", display: "block", "margin-right": "16px",
                                  },
                                },
                                m(
                                  "div",
                                  {
                                    style: {
                                      "box-sizing": "border-box",
                                      display: "inline",
                                    },
                                  },
                                  m(
                                    "a",
                                    {
                                      href: "https://filatelia.correos.es/es/es/rincon-correos/filatelia/productos/criptosellos/2024/mortadelo?utm_source=site_cor_ces&amp;utm_medium=banner&amp;utm_campaign=Corr_criptosello_Oct24&amp;utm_term=home",
                                      target: "_self",
                                      style: {
                                        "min-width": "auto", "font-size": "16px", "line-height": "24px", "box-sizing": "border-box", "justify-content": "flex-start", "font-weight": "700", padding: "0px", width: "100%", color: "rgb(0, 46, 109)", "background-color": "rgba(0, 0, 0, 0)", "border-color": "rgba(0, 0, 0, 0)", height: "56px", border: "0px none rgba(0, 0, 0, 0)", "text-transform": "none", "border-radius": "8px", "font-family": "Roboto, sans-serif", "letter-spacing": "1.42857px", "text-decoration": "none solid rgb(0, 46, 109)", display: "inline-flex", position: "relative", "align-items": "center", outline: "rgb(0, 46, 109) none 0px", "user-select": "none", appearance: "none", overflow: "visible", "vertical-align": "middle",
                                      },
                                    },
                                    [
                                      m("div", {
                                        style: {
                                          "box-sizing": "content-box",
                                          opacity: "0",
                                          "border-radius": "8px",
                                          top: "0px",
                                          left: "0px",
                                          position: "absolute",
                                          width: "100%",
                                          height: "56px",
                                          overflow: "hidden",
                                        },
                                      }),
                                      m(
                                        "span",
                                        {
                                          style: {
                                            "box-sizing": "border-box",
                                            "text-align": "start",
                                            "letter-spacing": "normal",
                                            "font-family":
                                              "Cartero, 'Helvetica Neue', Helvetica, Arial, sans-serif",
                                          },
                                        },
                                        m(
                                          "span",
                                          {
                                            slot: "text",
                                            style: {
                                              "box-sizing": "border-box",
                                            },
                                          },
                                          "MÁS INFO"
                                        )
                                      ),
                                      m("i", {
                                        slot: "icon-right",
                                        style: {
                                          "box-sizing": "border-box",
                                          display: "flex",
                                          "justify-content": "center",
                                          "align-items": "center",
                                          width: "1.5rem",
                                          height: "24px",
                                          "font-size": "24px",
                                          "font-family": "correos-icons",
                                          "font-weight": "400",
                                          "font-style": "normal",
                                          "font-variant": "normal",
                                          "text-rendering": "auto",
                                          "line-height": "24px",
                                          "-webkit-font-smoothing":
                                            "antialiased",
                                          "margin-left": "16px",
                                        },
                                      }),
                                    ]
                                  )
                                )
                              )
                            ),
                          ])
                        )
                      ),
                      m(
                        "div",
                        {
                          style: {
                            "box-sizing": "border-box",
                            display: "block",
                            position: "absolute",
                            bottom: "-72px",
                            right: "-304px",
                            "pointer-events": "none",
                          },
                        },
                        m(
                          "figure",
                          {
                            style: {
                              "box-sizing": "border-box",
                              margin: "0px",
                              padding: "0px",
                              border: "0px none rgb(51, 51, 51)",
                              font: "16px / 23.84px Cartero, 'Helvetica Neue', Helvetica, Arial, sans-serif",
                              "vertical-align": "baseline",
                            },
                          },
                          m("img", {
                            src: "img/deco_bars.svg",
                            alt: "",
                            style: { "box-sizing": "border-box" },
                          })
                        )
                      ),
                    ]
                  )
                ),
              ]
            ),
          ])
        )
      ),
    ],
  };
}

function BoxViajaYDisfruta() {
  return {
    view: ({ attrs }) => [
      m(
        "div",
        {
          style: {
            "box-sizing": "border-box",
            height: "507px",
            background:
              "rgb(255, 255, 255) none repeat scroll 0% 0% / auto padding-box border-box",
            "box-shadow": "rgba(0, 0, 0, 0.1) 0px 10px 20px 0px",
            width: "48%",
            display: "flex",
            "flex-direction": "column",
            border: "1px solid rgb(203, 203, 203)",
            "border-radius": "8px",
            overflow: "hidden",
          },
        },
        [
          m(
            "figure",
            {
              style: {
                height: "224px",
                "box-sizing": "border-box",
                margin: "0px",
                padding: "0px",
                border: "0px none rgb(51, 51, 51)",
                font: "16px / 23.84px Cartero, 'Helvetica Neue', Helvetica, Arial, sans-serif",
                "vertical-align": "baseline",
              },
            },
            m("img", {
              slot: "img-header",
              src: attrs.img,
              alt: "",
              style: {
                "box-sizing": "border-box",
                width: "100%",
                height: "224px",
                "object-fit": "cover",
              },
            })
          ),
          m(
            "div",
            {
              style: {
                padding: "24px",
                "box-sizing": "border-box",
                display: "flex",
                "flex-direction": "column",
                height: "281px",
              },
            },
            [
              m(
                "h3",
                {
                  slot: "title",
                  style: {
                    "font-size": "32px",
                    "line-height": "44px",
                    "box-sizing": "border-box",
                    margin: "0px 0px 8px",
                    padding: "0px",
                    "font-weight": "400",
                    color: "rgb(51, 51, 51)",
                  },
                },
                attrs.titulo
              ),
              m(
                "p",
                {
                  slot: "paragraph",
                  style: {
                    "font-size": "16px",
                    "line-height": "24px",
                    "box-sizing": "border-box",
                    margin: "0px 0px 29px",
                    padding: "0px",
                    color: "rgb(51, 51, 51)",
                    "font-weight": "300",
                  },
                },
                attrs.texto
              ),
              m(
                "correos-ui-button",
                {
                  form: "",
                  style: {
                    "box-sizing": "border-box",
                    visibility: "visible",
                    display: "block",
                  },
                },
                [
                  m(
                    "correos-ui-button",
                    {
                      slot: "link",
                      theme: "secondary",
                      variant: "link",
                      type: "text",
                      "href-link":
                        "https://www.correos.es/es/es/particulares/ocio-y-viajes",
                      target: "_self",
                      "element-title": "Viaja y disfruta con Correos ",
                      "component-type": "contentmodule",
                      form: "",
                      hidden: "hidden",
                      style: {
                        "box-sizing": "border-box",
                        visibility: "visible",
                        "margin-top": "auto",
                        display: "block",
                      },
                    },
                    m(
                      "div",
                      {
                        style: {
                          "box-sizing": "border-box",
                          display: "inline",
                        },
                      },
                      m(
                        "a",
                        {
                          href: "https://www.correos.es/es/es/particulares/ocio-y-viajes",
                          target: "_self",
                          style: {
                            "min-width": "auto",
                            "font-size": "16px",
                            "line-height": "24px",
                            "box-sizing": "border-box",
                            "justify-content": "flex-start",
                            "font-weight": "700",
                            padding: "0px",
                            color: "rgb(0, 46, 109)",
                            "background-color": "rgba(0, 0, 0, 0)",
                            "border-color": "rgba(0, 0, 0, 0)",
                            height: "56px",
                            border: "0px none rgba(0, 0, 0, 0)",
                            "text-transform": "none",
                            "border-radius": "8px",
                            "font-family": "Roboto, sans-serif",
                            "letter-spacing": "1.42857px",
                            "text-decoration": "none solid rgb(0, 46, 109)",
                            display: "inline-flex",
                            position: "relative",
                            "align-items": "center",
                            outline: "rgb(0, 46, 109) none 0px",
                            "user-select": "none",
                            appearance: "none",
                            overflow: "visible",
                            "vertical-align": "middle",
                          },
                        },
                        [
                          m("div", {
                            style: {
                              "box-sizing": "content-box",
                              opacity: "0",
                              "border-radius": "8px",
                              top: "0px",
                              left: "0px",
                              position: "absolute",
                              width: "100%",
                              height: "56px",
                              overflow: "hidden",
                            },
                          }),
                          m(
                            "span",
                            {
                              style: {
                                "box-sizing": "border-box",
                                "text-align": "start",
                                "letter-spacing": "normal",
                                "font-family":
                                  "Cartero, 'Helvetica Neue', Helvetica, Arial, sans-serif",
                              },
                            },
                            m(
                              "span",
                              {
                                slot: "text",
                                style: { "box-sizing": "border-box" },
                              },
                              "MÁS INFO >"
                            )
                          ),
                          m("i", {
                            slot: "icon-right",
                            style: {
                              "box-sizing": "border-box",
                              display: "flex",
                              "justify-content": "center",
                              "align-items": "center",
                              width: "1.5rem",
                              height: "24px",
                              "font-size": "24px",
                              "font-family": "correos-icons",
                              "font-weight": "400",
                              "font-style": "normal",
                              "font-variant": "normal",
                              "text-rendering": "auto",
                              "line-height": "24px",
                              "-webkit-font-smoothing": "antialiased",
                              "margin-left": "16px",
                            },
                          }),
                        ]
                      )
                    )
                  ),
                  m(
                    "div",
                    { style: { "box-sizing": "border-box", display: "none" } },
                    m(
                      "button",
                      {
                        type: "text",
                        style: {
                          "min-width": "128px",
                          "font-size": "16px",
                          "line-height": "24px",
                          "box-sizing": "border-box",
                          color: "rgb(255, 255, 255)",
                          "background-color": "rgb(148, 148, 148)",
                          "border-color": "rgba(0, 0, 0, 0)",
                          height: "56px",
                          border: "0px none rgba(0, 0, 0, 0)",
                          "text-transform": "none",
                          "font-weight": "700",
                          "border-radius": "8px",
                          padding: "0px 24px",
                          "font-family": "Roboto, sans-serif",
                          "letter-spacing": "1.42857px",
                          "text-decoration": "none solid rgb(255, 255, 255)",
                          display: "inline-flex",
                          position: "relative",
                          "align-items": "center",
                          "justify-content": "center",
                          outline: "rgb(255, 255, 255) none 0px",
                          "user-select": "none",
                          appearance: "none",
                          overflow: "visible",
                          "vertical-align": "middle",
                        },
                      },
                      [
                        m("div", {
                          style: {
                            "box-sizing": "content-box",
                            "border-radius": "8px",
                            top: "0px",
                            left: "0px",
                            position: "absolute",
                            width: "100%",
                            height: "100%",
                            overflow: "hidden",
                          },
                        }),
                        m("span", {
                          style: {
                            "box-sizing": "border-box",
                            "letter-spacing": "normal",
                            "font-family":
                              "Cartero, 'Helvetica Neue', Helvetica, Arial, sans-serif",
                          },
                        }),
                      ]
                    )
                  ),
                ]
              ),
            ]
          ),
        ]
      ),
    ],
  };
}

function ParatiParatuEmpresa(){
  return {
    view: () => [
      m("section", {"style":{"box-sizing":"border-box","box-shadow":"rgba(0, 0, 0, 0.1) 0px -5px 20px 0px","background-color":"rgb(255, 255, 255)"}}, 
  m("div", {"style":{"box-sizing":"border-box","max-width":"1366px","padding-left":"24px","padding-right":"24px","margin-left":"auto","margin-right":"auto","display":"block","width":"100%","padding-top":"85px","padding":"85px 24px 0px"}}, 
    m("div", {"style":{"box-sizing":"border-box"}},
      [
        m("ul", {"style":{"box-sizing":"border-box","flex-wrap":"wrap","border-bottom":"1.25px solid rgb(203, 203, 203)","padding-bottom":"48px","margin-block":"0px","margin":"0px","padding":"0px 0px 48px","list-style":"outside none none","display":"flex","width":"100%","align-items":"flex-start"}},
          [
            m("li", {"style":{"box-sizing":"border-box","flex":"0 1 calc(25% - 10px)","margin-right":"10px","border-bottom":"0px none rgb(51, 51, 51)","padding":"0px","padding-top":"0px","width":"100%"}},
              [
                m("span", {"style":{"font-size":"24px","line-height":"36px","box-sizing":"border-box","color":"rgb(51, 51, 51)","font-weight":"300","display":"block","width":"100%","padding-bottom":"26px"}}, 
                  "Para ti "
                ),
                m("ul", {"data-menu":"0","style":{"box-sizing":"border-box","padding-top":"0px","pointer-events":"all","height":"auto","opacity":"1","transition":"opacity 0.45s cubic-bezier(0.55, 0.05, 0.05, 0.96), transform 0.45s cubic-bezier(0.55, 0.05, 0.05, 0.96), -webkit-transform 0.45s cubic-bezier(0.55, 0.05, 0.05, 0.96)","margin-block":"0px","margin":"0px","padding":"0px","list-style":"outside none none"}},
                  [
                    m("li", {"style":{"box-sizing":"border-box","padding-bottom":"20px"}, "onmouseover": (e) => e.target.style.textDecoration = "underline", "onmouseout": (e) => e.target.style.textDecoration = "none"}, 
                      m("a", {"href":"https://www.correos.es/es/es/herramientas/localizador/envios","target":"_self","title":"Ir a Seguimiento de envío","style":{"font-size":"16px","line-height":"24px","box-sizing":"border-box","color":"rgb(0, 46, 109)","text-decoration":"none solid rgb(0, 46, 109)"}}, 
                        "Seguimiento de envío"
                      )
                    ),
                    m("li", {"style":{"box-sizing":"border-box","padding-bottom":"20px"}, "onmouseover": (e) => e.target.style.textDecoration = "underline", "onmouseout": (e) => e.target.style.textDecoration = "none"}, 
                      m("a", {"href":"https://www.correos.es/es/es/particulares/recibir","target":"_self","title":"Ir a Recibir","style":{"font-size":"16px","line-height":"24px","box-sizing":"border-box","color":"rgb(0, 46, 109)","text-decoration":"none solid rgb(0, 46, 109)"}}, 
                        "Recibir"
                      )
                    ),
                    m("li", {"style":{"box-sizing":"border-box","padding-bottom":"0px"}, "onmouseover": (e) => e.target.style.textDecoration = "underline", "onmouseout": (e) => e.target.style.textDecoration = "none"}, 
                      m("a", {"href":"https://www.correos.es/es/es/particulares/enviar","target":"_self","title":"Ir a Enviar","style":{"font-size":"16px","line-height":"24px","box-sizing":"border-box","color":"rgb(0, 46, 109)","text-decoration":"none solid rgb(0, 46, 109)"}}, 
                        "Enviar"
                      )
                    )
                  ]
                )
              ]
            ),
            m("li", {"style":{"box-sizing":"border-box","flex":"0 1 calc(25% - 10px)","margin-right":"10px","border-bottom":"0px none rgb(51, 51, 51)","padding":"0px","width":"100%"}},
              [
                m("span", {"style":{"font-size":"24px","line-height":"36px","box-sizing":"border-box","color":"rgb(51, 51, 51)","font-weight":"300","display":"block","width":"100%","padding-bottom":"26px"}}, 
                  "Para tu empresa"
                ),
                m("ul", {"data-menu":"1","style":{"box-sizing":"border-box","padding-top":"0px","pointer-events":"all","height":"auto","opacity":"1","transition":"opacity 0.45s cubic-bezier(0.55, 0.05, 0.05, 0.96), transform 0.45s cubic-bezier(0.55, 0.05, 0.05, 0.96), -webkit-transform 0.45s cubic-bezier(0.55, 0.05, 0.05, 0.96)","margin-block":"0px","margin":"0px","padding":"0px","list-style":"outside none none"}},
                  [
                    m("li", {"style":{"box-sizing":"border-box","padding-bottom":"20px"}, "onmouseover": (e) => e.target.style.textDecoration = "underline", "onmouseout": (e) => e.target.style.textDecoration = "none"}, 
                      m("a", {"href":"https://www.correos.es/es/es/empresas/enviar","target":"_self","title":"Ir a Enviar","style":{"font-size":"16px","line-height":"24px","box-sizing":"border-box","color":"rgb(0, 46, 109)","text-decoration":"none solid rgb(0, 46, 109)"}}, 
                        "Enviar"
                      )
                    ),
                    m("li", {"style":{"box-sizing":"border-box","padding-bottom":"20px"}, "onmouseover": (e) => e.target.style.textDecoration = "underline", "onmouseout": (e) => e.target.style.textDecoration = "none"}, 
                      m("a", {"href":"https://www.correos.es/es/es/empresas/ecommerce","target":"_self","title":"Ir a Ecommerce","style":{"font-size":"16px","line-height":"24px","box-sizing":"border-box","color":"rgb(0, 46, 109)","text-decoration":"none solid rgb(0, 46, 109)"}}, 
                        "Ecommerce"
                      )
                    ),
                    m("li", {"style":{"box-sizing":"border-box","padding-bottom":"0px"}, "onmouseover": (e) => e.target.style.textDecoration = "underline", "onmouseout": (e) => e.target.style.textDecoration = "none"}, 
                      m("a", {"href":"https://www.correos.es/es/es/empresas/marketing","target":"_self","title":"Ir a Marketing","style":{"font-size":"16px","line-height":"24px","box-sizing":"border-box","color":"rgb(0, 46, 109)","text-decoration":"none solid rgb(0, 46, 109)"}}, 
                        "Marketing"
                      )
                    )
                  ]
                )
              ]
            ),
            m("li", {"style":{"box-sizing":"border-box","flex":"0 1 calc(25% - 10px)","margin-right":"10px","border-bottom":"0px none rgb(51, 51, 51)","padding":"0px","width":"100%"}},
              [
                m("span", {"style":{"font-size":"24px","line-height":"36px","box-sizing":"border-box","color":"rgb(51, 51, 51)","font-weight":"300","display":"block","width":"100%","padding-bottom":"26px"}}, 
                  "Para tu interés"
                ),
                m("ul", {"data-menu":"2","style":{"box-sizing":"border-box","padding-top":"0px","pointer-events":"all","height":"auto","opacity":"1","transition":"opacity 0.45s cubic-bezier(0.55, 0.05, 0.05, 0.96), transform 0.45s cubic-bezier(0.55, 0.05, 0.05, 0.96), -webkit-transform 0.45s cubic-bezier(0.55, 0.05, 0.05, 0.96)","margin-block":"0px","margin":"0px","padding":"0px","list-style":"outside none none"}},
                  [
                    m("li", {"style":{"box-sizing":"border-box","padding-bottom":"20px"}, "onmouseover": (e) => e.target.style.textDecoration = "underline", "onmouseout": (e) => e.target.style.textDecoration = "none"}, 
                      m("a", {"href":"https://www.correos.es/es/es/particulares/ocio-y-viajes/sellos-y-filatelia","target":"_blank","title":"Ir a Filatelia","style":{"font-size":"16px","line-height":"24px","box-sizing":"border-box","color":"rgb(0, 46, 109)","text-decoration":"none solid rgb(0, 46, 109)"}}, 
                        "Filatelia"
                      )
                    ),
                    m("li", {"style":{"box-sizing":"border-box","padding-bottom":"20px"}, "onmouseover": (e) => e.target.style.textDecoration = "underline", "onmouseout": (e) => e.target.style.textDecoration = "none"}, 
                      m("a", {"href":"https://www.market.correos.es/","target":"_blank","title":"Ir a Correos Market","style":{"font-size":"16px","line-height":"24px","box-sizing":"border-box","color":"rgb(0, 46, 109)","text-decoration":"none solid rgb(0, 46, 109)"}}, 
                        "Correos Market"
                      )
                    ),
                    m("li", {"style":{"box-sizing":"border-box","padding-bottom":"0px"}, "onmouseover": (e) => e.target.style.textDecoration = "underline", "onmouseout": (e) => e.target.style.textDecoration = "none"}, 
                      m("a", {"href":"https://www.correos.com/?_ga=2.48058663.1272337042.1602486055-1925384938.1602155804","target":"_blank","title":"Ir a Web institucional","style":{"font-size":"16px","line-height":"24px","box-sizing":"border-box","color":"rgb(0, 46, 109)","text-decoration":"none solid rgb(0, 46, 109)"}}, 
                        "Web institucional"
                      )
                    )
                  ]
                )
              ]
            ),
            m("li", {"style":{"box-sizing":"border-box","margin-right":"0px","flex":"0 1 calc(25% - 10px)","border-bottom":"0px none rgb(51, 51, 51)","padding":"0px","width":"100%"}},
              [
                m("div", {"style":{"box-sizing":"border-box","padding":"0px","border-bottom":"0px none rgb(51, 51, 51)","margin-bottom":"0px"}},
                  [
                    m("ul", 
                      {
                        "data-menu": "3", 
                        "style": {
                          "box-sizing": "border-box",
                          "padding-top": "0px",
                          "pointer-events": "all",
                          "height": "auto",
                          "opacity": "1",
                          "transition": "opacity 0.45s cubic-bezier(0.55, 0.05, 0.05, 0.96), transform 0.45s cubic-bezier(0.55, 0.05, 0.05, 0.96), -webkit-transform 0.45s cubic-bezier(0.55, 0.05, 0.05, 0.96)",
                          "margin-block": "0px",
                          "margin": "0px",
                          "padding": "0px",
                          "list-style": "outside none none",
                          "display": "flex",
                          "flex-direction": "column",
                          "align-items": "flex-start"
                        }
                      }, 
                      [
                        m("li", 
                          {
                            "style": {
                              "box-sizing": "border-box",
                              "padding-bottom": "10px"
                            }
                          },
                          m("img", {
                            src: "./img/headset.svg",
                            alt: "Imagen 1",
                            style: {
                              width: "40px",
                              height: "auto",
                              marginBottom: "8px"
                            }
                          })
                        ),
                        
                      
                        m("li", 
                          {
                            "style": {
                              "box-sizing": "border-box",
                              "padding-bottom": "10px"
                            }
                          }, 
                          m("a", 
                            {
                              "href": "/es/es/atencion-al-cliente",
                              "target": "_self",
                              "title": "Ir a Atención al cliente",
                              "style": {
                                "font-size": "16px",
                                "line-height": "24px",
                                "box-sizing": "border-box",
                                "color": "rgb(0, 46, 109)",
                                "text-decoration": "none", 
                                "cursor": "pointer",
                              },
                              "onmouseover": (e) => e.target.style.textDecoration = "underline",
                              "onmouseout": (e) => e.target.style.textDecoration = "none"
                            }, 
                            "Atención al cliente"
                          )
                        ),
                        
                        m("div", 
                          {
                            "style": {
                              "display": "flex", 
                              "gap": "25px",
                              "justify-content": "flex-start",
                            }
                          }, 
                          
                          [
                            
                            m("a", { href: "https://www.facebook.com/correos.es", title: "Facebook", target: "_blank" },
                              m("img", { src: "./img/facebook.svg", alt: "Imagen 2", style: { width: "20px", height: "auto", filter: "brightness(0) saturate(5%) invert(10%) sepia(80%) saturate(4794%) hue-rotate(179deg) brightness(96%) contrast(92%)" } })
                            ),
                            m("a", { href: "https://www.instagram.com/correos/", title: "Instagram", target: "_blank" },
                              m("img", { src: "./img/instagram.svg", alt: "Imagen 3", style: { width: "20px", height: "auto", filter: "brightness(0) saturate(5%) invert(10%) sepia(80%) saturate(4794%) hue-rotate(179deg) brightness(96%) contrast(92%)" } })
                            ),
                            m("a", { href: "https://x.com/correos", title: "Twitter", target: "_blank" },
                              m("img", { src: "./img/twitter.svg", alt: "Imagen 4", style: { width: "30px", height: "auto", filter: "brightness(0) saturate(5%) invert(10%) sepia(80%) saturate(4794%) hue-rotate(179deg) brightness(96%) contrast(92%)" } })
                            ),
                            m("a", { href: "https://www.linkedin.com/company/correos/", title: "Linkedin", target: "_blank" },
                              m("img", { src: "./img/linkedin.svg", alt: "Imagen 5", style: { width: "20px", height: "auto", filter: "brightness(0) saturate(5%) invert(10%) sepia(80%) saturate(4794%) hue-rotate(179deg) brightness(96%) contrast(92%)" } })
                            ),
                            m("a", { href: "https://www.youtube.com/user/CanalCorreos", title: "Youtube", target: "_blank" },
                              m("img", { src: "./img/youtube.svg", alt: "Imagen 6", style: { width: "24px", height: "auto", filter: "brightness(0) saturate(5%) invert(10%) sepia(80%) saturate(4794%) hue-rotate(179deg) brightness(96%) contrast(92%)" } })
                            )
                          ]
                        )
                      ]
                    )
                    
                    
                  ]
                ),
                m("div", {"style":{"box-sizing":"border-box"}}, 
                  m("ul", {"style":{"box-sizing":"border-box","display":"flex","align-items":"center","width":"100%","margin-block":"0px","margin":"0px","padding":"0px","list-style":"outside none none"}},
                    [
                      m("li", {"style":{"box-sizing":"border-box","flex":"0 1 auto","margin-right":"24px"}}, 
                        m("a", {"href":"https://www.facebook.com/correos.es","target":"_blank","title":"Ir a Ir a Facebook","aria-label":"Ir a Ir a Facebook","style":{"box-sizing":"border-box","color":"rgb(0, 46, 109)","text-decoration":"none solid rgb(0, 46, 109)","font-size":"24px"}}, 
                          m("i", {"style":{"box-sizing":"border-box","display":"flex","justify-content":"center","align-items":"center","width":"1.5rem","height":"23.9844px","font-size":"24px","font-family":"correos-icons","font-weight":"400","font-style":"normal","font-variant":"normal","text-rendering":"auto","line-height":"24px","-webkit-font-smoothing":"antialiased"}})
                        )
                      ),
                      m("li", {"style":{"box-sizing":"border-box","flex":"0 1 auto","margin-right":"24px"}}, 
                        m("a", {"href":"https://www.instagram.com/correos/","target":"_blank","title":"Ir a Ir a Instagram","aria-label":"Ir a Ir a Instagram","style":{"box-sizing":"border-box","color":"rgb(0, 46, 109)","text-decoration":"none solid rgb(0, 46, 109)","font-size":"24px"}}, 
                          m("i", {"style":{"box-sizing":"border-box","display":"flex","justify-content":"center","align-items":"center","width":"1.5rem","height":"23.9844px","font-size":"24px","font-family":"correos-icons","font-weight":"400","font-style":"normal","font-variant":"normal","text-rendering":"auto","line-height":"24px","-webkit-font-smoothing":"antialiased"}})
                        )
                      ),
                      m("li", {"style":{"box-sizing":"border-box","flex":"0 1 auto","margin-right":"24px"}}, 
                        m("a", {"href":"https://twitter.com/correos","target":"_blank","title":"Ir a Ir a Twitter","aria-label":"Ir a Ir a Twitter","style":{"box-sizing":"border-box","color":"rgb(0, 46, 109)","text-decoration":"none solid rgb(0, 46, 109)","font-size":"24px"}}, 
                          m("i", {"style":{"box-sizing":"border-box","display":"flex","justify-content":"center","align-items":"center","width":"1.5rem","height":"23.9844px","font-size":"24px","font-family":"correos-icons","font-weight":"400","font-style":"normal","font-variant":"normal","text-rendering":"auto","line-height":"24px","-webkit-font-smoothing":"antialiased"}})
                        )
                      ),
                      m("li", {"style":{"box-sizing":"border-box","flex":"0 1 auto","margin-right":"24px"}}, 
                        m("a", {"href":"https://www.linkedin.com/company/correos/","target":"_blank","title":"Ir a Ir a Linkedin","aria-label":"Ir a Ir a Linkedin","style":{"box-sizing":"border-box","color":"rgb(0, 46, 109)","text-decoration":"none solid rgb(0, 46, 109)","font-size":"24px"}}, 
                          m("i", {"style":{"box-sizing":"border-box","display":"flex","justify-content":"center","align-items":"center","width":"1.5rem","height":"23.9844px","font-size":"24px","font-family":"correos-icons","font-weight":"400","font-style":"normal","font-variant":"normal","text-rendering":"auto","line-height":"24px","-webkit-font-smoothing":"antialiased"}})
                        )
                      ),
                      m("li", {"style":{"box-sizing":"border-box","margin-right":"0px","flex":"0 1 auto"}}, 
                        m("a", {"href":"https://www.youtube.com/user/CanalCorreos","target":"_blank","title":"Ir a Ir a Youtube","aria-label":"Ir a Ir a Youtube","style":{"box-sizing":"border-box","color":"rgb(0, 46, 109)","text-decoration":"none solid rgb(0, 46, 109)","font-size":"24px"}}, 
                          m("i", {"style":{"box-sizing":"border-box","display":"flex","justify-content":"center","align-items":"center","width":"1.5rem","height":"23.9844px","font-size":"24px","font-family":"correos-icons","font-weight":"400","font-style":"normal","font-variant":"normal","text-rendering":"auto","line-height":"24px","-webkit-font-smoothing":"antialiased"}})
                        )
                      )
                    ]
                  )
                )
              ]
            )
          ]
        ),

      ]
    )
  )
)
    ]
  }
}

function DescargaLaApp() {
  return {
    modelApps: {
      items: [
        {
          img: "./img/apple_store.jpg",
          link: "https://apps.apple.com/app/correos-info/id486322953",
        },
        {
          img: "./img/google_play.jpg",
          link: "https://play.google.com/store/apps/details?id=com.correos.app",
        },
        {
          img: "./img/huawei.svg",
          link: "https://appgallery.huawei.com/#/app/C101994013",
        }
      ]
    },

    modelMetodos: {
      items: [
        { img: "./img/logo-mastercard.png" },
        { img: "./img/paypal.svg" },
        { img: "./img/maestro.svg" },
        { img: "./img/visa.svg" },
        { img: "./img/log amex.svg" }
      ]
    },

    view: function() {
      return [
        m("div", { style: { padding: "0px 180px 0px 180px" } },
          [
            m("div", {
              style: {
                "box-sizing": "border-box",
                padding: "40px 0px",
                display: "flex",
                "align-items": "flex-start",
                "flex-wrap": "nowrap",
                width: "100%"
              }
            },
            [
              m("div", { style: { flex: "0 1 calc(40% - 10px)", "margin-right": "10px" } },
                [
                  m("span", {
                    style: {
                      "font-size": "16px",
                      color: "rgb(51, 51, 51)",
                      "font-weight": "300",
                      display: "block",
                      "padding-bottom": "16px"
                    }
                  }, "Descarga la App de Correos"),
                  
                  m("ul", {
                    style: {
                      margin: "0px",
                      padding: "0px",
                      "list-style": "none",
                      display: "flex",
                      "align-items": "center",
                      "flex-wrap": "wrap"
                    }
                  },
                  this.modelApps.items.map((item) => m(DescargaLaAppBox, item)))
                ]
              ),
              
              m("div", { style: { flex: "0 1 calc(35% - 10px)" } },
                [
                  m("span", {
                    style: {
                      "font-size": "16px",
                      color: "rgb(51, 51, 51)",
                      "font-weight": "300",
                      display: "block",
                      "padding-bottom": "16px"
                    }
                  }, "Métodos de pago"),
                  
                  m("ul", {
                    style: {
                      margin: "0px",
                      padding: "0px",
                      "list-style": "none",
                      display: "flex",
                      "align-items": "center",
                      "flex-wrap": "wrap",
                      "row-gap": "12px"
                    }
                  },
                  this.modelMetodos.items.map((item) => m(MetodosDePagoBox, item)))
                ]
              )
            ])
          ])
      ];
    }
  };
}

function DescargaLaAppBox() {
  return {
    view: (vnode) => [
      m("li", { style: { "margin-right": "16px", "margin-bottom": "16px" } },
        m("a", { href: vnode.attrs.link, target: "_blank" },
          m("img", { src: vnode.attrs.img, style: { height: "40px" }, alt: "App Store" })
        )
      )
    ]
  };
}

function MetodosDePagoBox() {
  return {
    view: (vnode) => [
      m("li", {
        style: {
          width: "56px",
          height: "32px",
          border: "1px solid rgb(203, 203, 203)",
          "border-radius": "4px",
          "margin-right": "16px",
          "box-shadow": "rgba(0, 0, 0, 0.1) 0px 10px 20px"
        }
      },
      m("img", { src: vnode.attrs.img, style: { width: "100%", height: "30px" }, alt: "Método de pago" })
      )
    ]
  };
}

function Footer() {
  return {
    view: () => [
      m(
        "section",
        {
          style: {
            "z-index": "20",
            position: "relative",
            "box-sizing": "border-box",
            "background-color": "rgb(51, 51, 51)",
          },
        },
        m(
          "div",
          {
            style: {
              "box-sizing": "border-box",
              "max-width": "1366px",
              "padding-left": "24px",
              "padding-right": "24px",
              "margin-left": "auto",
              "margin-right": "auto",
              padding: "24px",
              "flex-wrap": "nowrap",
              "background-color": "rgb(51, 51, 51)",
              display: "flex",
              "align-items": "flex-start",
            },
          },
          [
            m(
              "div",
              {
                style: {
                  "box-sizing": "border-box",
                  width: "48px",
                  height: "48px",
                },
              },
              m(
                "correos-cdk-imageblock",
                {
                  "url-image":
                    "./img/ico-splash.svg",
                  "alt-image": "Correos",
                  style: {
                    "box-sizing": "border-box", visibility: "visible", width: "100%", height: "48px", display: "flex", "justify-content": "center", "align-items": "center", position: "relative",
                  },
                },
                m(
                  "figure",
                  {
                    style: {
                      "box-sizing": "border-box",
                      width: "100%",
                      margin: "0px",
                      padding: "0px",
                      overflow: "hidden",
                      display: "flex",
                      "flex-direction": "column",
                      "align-items": "center",
                    },
                  },
                  m("img", {
                    src: "./img/ico-splash.svg",
                    alt: "Correos",
                    style: {
                      "box-sizing": "border-box",
                      width: "100%",
                      "min-height": "0px",
                    },
                  })
                )
              )
            ),
            m(
              "div",
              {
                style: {
                  "box-sizing": "border-box",
                  width: "calc(100% - 48px)",
                  "padding-left": "40px",
                },
              },
              [
                m(
                  "ul",
                  {
                    style: {
                      "box-sizing": "border-box",
                      "flex-direction": "row",
                      "padding-top": "0px",
                      "margin-block": "0px",
                      margin: "0px",
                      padding: "0px",
                      "list-style": "outside none none",
                      display: "flex",
                      width: "100%",
                    },
                  },
                  [
                    m(
                      "li",
                      {
                        style: {
                          "box-sizing": "border-box",
                          "margin-right": "48px",
                          "padding-bottom": "0px",
                        },
                      },
                      m(
                        "a",
                        {
                          href: "/es/es/legales/politica-de-cookies",
                          target: "_self",
                          title: "Ir a Política de cookies",
                          style: {
                            cursor: "pointer",
                            "pointer-events": "all",
                            "box-sizing": "border-box",
                            "font-size": "16px",
                            "line-height": "24px",
                            color: "rgb(255, 255, 255)",
                            "font-weight": "300",
                            "text-decoration": "none solid rgb(255, 255, 255)",
                          },
                        },
                        "Política de cookies"
                      )
                    ),
                    m(
                      "li",
                      {
                        style: {
                          "box-sizing": "border-box",
                          "margin-right": "48px",
                          "padding-bottom": "0px",
                        },
                      },
                      m(
                        "a",
                        {
                          href: "/es/es/legales/aviso-legal",
                          target: "_self",
                          title: "Ir a Aviso legal",
                          style: {
                            cursor: "pointer",
                            "pointer-events": "all",
                            "box-sizing": "border-box",
                            "font-size": "16px",
                            "line-height": "24px",
                            color: "rgb(255, 255, 255)",
                            "font-weight": "300",
                            "text-decoration": "none solid rgb(255, 255, 255)",
                          },
                        },
                        "Aviso legal"
                      )
                    ),
                    m(
                      "li",
                      {
                        style: {
                          "box-sizing": "border-box",
                          "margin-right": "48px",
                          "padding-bottom": "0px",
                        },
                      },
                      m(
                        "a",
                        {
                          href: "/es/es/legales/privacidad-web",
                          target: "_self",
                          title: "Ir a Privacidad web",
                          style: {
                            cursor: "pointer",
                            "pointer-events": "all",
                            "box-sizing": "border-box",
                            "font-size": "16px",
                            "line-height": "24px",
                            color: "rgb(255, 255, 255)",
                            "font-weight": "300",
                            "text-decoration": "none solid rgb(255, 255, 255)",
                          },
                        },
                        "Privacidad web"
                      )
                    ),
                    m(
                      "li",
                      {
                        style: {
                          "box-sizing": "border-box",
                          "margin-right": "48px",
                          "padding-bottom": "0px",
                        },
                      },
                      m(
                        "a",
                        {
                          href: "/es/es/legales/alerta-de-seguridad",
                          target: "_self",
                          title: "Ir a Alerta seguridad",
                          style: {
                            cursor: "pointer",
                            "pointer-events": "all",
                            "box-sizing": "border-box",
                            "font-size": "16px",
                            "line-height": "24px",
                            color: "rgb(255, 255, 255)",
                            "font-weight": "300",
                            "text-decoration": "none solid rgb(255, 255, 255)",
                          },
                        },
                        "Alerta seguridad"
                      )
                    ),
                    m(
                      "li",
                      {
                        style: {
                          "box-sizing": "border-box",
                          "margin-right": "48px",
                          "padding-bottom": "0px",
                        },
                      },
                      m(
                        "a",
                        {
                          href: "/es/es/legales/accesibilidad",
                          target: "_self",
                          title: "Ir a Accesibilidad",
                          style: {
                            cursor: "pointer",
                            "pointer-events": "all",
                            "box-sizing": "border-box",
                            "font-size": "16px",
                            "line-height": "24px",
                            color: "rgb(255, 255, 255)",
                            "font-weight": "300",
                            "text-decoration": "none solid rgb(255, 255, 255)",
                          },
                        },
                        "Accesibilidad"
                      )
                    ),
                    m(
                      "li",
                      {
                        style: {
                          "box-sizing": "border-box",
                          "margin-right": "0px",
                          "padding-bottom": "0px",
                        },
                      },
                      m(
                        "a",
                        {
                          target: "_self",
                          title: "Ir a Configurador de cookies",
                          "related-modal": "AvisoCookies",
                          style: {
                            cursor: "pointer",
                            "pointer-events": "all",
                            "box-sizing": "border-box",
                            "font-size": "16px",
                            "line-height": "24px",
                            color: "rgb(255, 255, 255)",
                            "font-weight": "300",
                            "text-decoration": "none solid rgb(255, 255, 255)",
                          },
                        },
                        "Configurador de cookies"
                      )
                    ),
                  ]
                ),
                m(
                  "p",
                  {
                    style: {
                      "font-size": "14px",
                      "line-height": "20px",
                      "box-sizing": "border-box",
                      "margin-top": "10px",
                      margin: "10px 0px 0px",
                      padding: "0px",
                      "font-weight": "400",
                      color: "rgb(203, 203, 203)",
                      display: "block",
                      width: "100%",
                    },
                  },
                  "©Sociedad Estatal Correos y Telegrafos, S.A., S.M.E. Todos los derechos reservados."
                ),
              ]
            ),
          ]
        )
      ),
    ],
  };
}

function Page() {
  return {
    view: () => [
      m(Header),
      m(EnviosNacionales),
      m(Servicioespecialpaqueteria),
      m(MasDe100Mil),
      m(SiemprePensandoEnTi2),
      m(EstasEsperando),
      m(QuieresHacerUnEnvio),
      m(CompraEnNuestraTienda),
      m(ViajaYDisfruta),
      m(DescubreActualidad),
      m(Criptosello),
      m(ParatiParatuEmpresa),
      m(DescargaLaApp),
      m(Footer),
    ],
  };
}

export { Page };
