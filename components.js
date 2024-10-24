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
            display: "flex", // Usamos flex para distribuir los hijos
            justifyContent: "center", // Centra los hijos horizontalmente
            alignItems: "center", // Centra los hijos verticalmente
            width: "80%", // El contenedor ocupa el 80% del ancho disponible
            margin: "0 auto", // Para centrar el contenedor horizontalmente
            marginTop: "0px", // Ajusta el margen superior según sea necesario
            //marginRight: "270px",
            gap: "16px", // Espacio entre los hijos
          },
        },
        [
          m(
            "div",
            {
              style: {
                marginLeft: "-500px",
                "box-sizing": "border-box",
                display: "flex",
                "flex-direction": "column",
              },
            },
            [
              m("img", {
                slot: "image",
                src: "./img/paqueteriaweb.jpg", // Ruta a la imagen
                alt: "Descripción de la imagen", // Alternativa para accesibilidad
                style: {
                  "box-sizing": "border-box",
                  margin: "0px 0px 8px",
                  padding: "0px",
                  width: "100%", // Ajusta el ancho de la imagen si es necesario
                  height: "auto", // Mantiene la proporción de la imagen
                },
              }),
            ]
          ),

          m(
            "div",
            {
              style: {
                width: "450px", // El segundo hijo será más pequeño, ocupando solo el 30% del espacio
                marginLeft: "-150px",
                "box-sizing": "border-box",
                display: "flex",
                "flex-direction": "column",
              },
            },
            [
              m(
                "h1",
                {
                  slot: "title",

                  style: {
                    "font-size": "14px",
                    "line-height": "20px",
                    "box-sizing": "border-box",
                    margin: "0px 0px 8px",
                    padding: "0px",
                    color: "rgb(51, 51, 51)",
                    "font-weight": "700",
                  },
                },
                "Paquetería"
              ),
              m(
                "span",
                {
                  slot: "subtitle",
                  style: {
                    "font-size": "32px",
                    "line-height": "44px",
                    "box-sizing": "border-box",
                    margin: "0px",
                    padding: "0px",
                    color: "rgb(51, 51, 51)",
                    "font-weight": "300",
                  },
                },
                "Tus envíos nacionales"
              ),
              m(
                "span",
                {
                  slot: "body-text",
                  style: {
                    "font-size": "16px",
                    "line-height": "24px",
                    "box-sizing": "border-box",
                    margin: "8px 0px 0px",
                    padding: "0px",
                    color: "rgb(51, 51, 51)",
                    "font-weight": "300",
                  },
                },
                "Ya sea para una mudanza, un regalo u otra ocasión, realiza tus envíos de manera fácil y económica para que lleguen a su destino cuando lo necesites."
              ),
              m(
                "div",
                {
                  style: {
                    "box-sizing": "border-box",
                    display: "flex",
                    "flex-direction": "row",
                    "padding-top": "16px",
                  },
                },
                m(
                  "correos-ui-button",
                  {
                    slot: "button",
                    theme: "primary",
                    type: "text",
                    "href-link":
                      "https://www.correos.es/es/es/particulares/enviar/envios-nacionales/envios-economicos/servicio-especial-de-paqueteria?utm_source=site_cor_ces&amp;utm_medium=banner&amp;utm_campaign=Corr_Jun24_paquetB2C&amp;utm_term=home&amp;utm_content=part",
                    target: "_self",
                    "element-title": "Tus envíos nacionales",
                    "component-type": "homedecorator",
                    form: "",
                    style: {
                      "box-sizing": "border-box",
                      visibility: "visible",
                      "margin-right": "24px",
                      "margin-top": "16px",
                      display: "block",
                    },
                  },
                  m(
                    "div",
                    {
                      style: { "box-sizing": "border-box", display: "inline" },
                    },
                    m(
                      "a",
                      {
                        href: "https://www.correos.es/es/es/particulares/enviar/envios-nacionales/envios-economicos/servicio-especial-de-paqueteria?utm_source=site_cor_ces&amp;utm_medium=banner&amp;utm_campaign=Corr_Jun24_paquetB2C&amp;utm_term=home&amp;utm_content=part",
                        target: "_self",
                        style: {
                          "min-width": "128px",
                          "font-size": "16px",
                          "line-height": "24px",
                          "box-sizing": "border-box",
                          color: "rgb(0, 46, 109)",
                          "background-color": "rgb(255, 205, 0)",
                          "border-color": "rgb(179, 143, 0)",
                          height: "55.9922px",
                          border: "1.5px solid rgb(179, 143, 0)",
                          "text-transform": "none",
                          "font-weight": "700",
                          "border-radius": "8px",
                          padding: "0px 24px",
                          "text-decoration": "none solid rgb(0, 46, 109)",
                          display: "inline-flex",
                          position: "relative",
                          "align-items": "center",
                          "justify-content": "center",
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
                            "border-radius": "8px",
                            top: "0px",
                            left: "0px",
                            position: "absolute",
                            width: "100%",
                            height: "52.9922px",
                            overflow: "hidden",
                          },
                        }),
                        m(
                          "span",
                          {
                            style: {
                              "box-sizing": "border-box",
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
                      ]
                    )
                  )
                )
              ),
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
            marginTop: "-250px",
            "box-sizing": "border-box",
            width: "100%",
            padding: "0 16px",
            display: "flex",
            "justify-content": "center",
            "align-items": "center",
          },
        },
        [
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
                margin: "0 16px", // Espacio entre los hijos
                display: "flex", // Usar flex para centrar contenido
                justifyContent: "center", // Centra el contenido dentro del hijo
                alignItems: "center", // Alinea verticalmente el contenido dentro del hijo
                width: "600px", // Ancho fijo para el hijo (opcional)
                //height: "50px", // Altura fija para el hijo (opcional)
                border: "1px solid #ccc", // Solo para visualización
                "box-sizing": "border-box",
                visibility: "visible",
                display: "block",
                "--_cdk-tracking-box-background-color": "1",
                "--_cdk-tracking-box-box-shadow": "1",
                "--_cdk-tracking-box-color-title": "1",
                "--_cdk-tracking-box-color-text": "1",
                "--_cdk-tracking-box-color-text-download": "1",
              },
            },
            [
              m("div", { style: { "box-sizing": "border-box" } }),
              m(
                "correos-ui-animation",
                {
                  "animation-type": "loader_componentes",
                  style: {
                    "box-sizing": "border-box",
                    visibility: "visible",
                    display: "block",
                    height: "844px",
                    position: "relative",
                    "--_ui-animation-background-color": "1",
                  },
                },
                m(
                  "div",
                  {
                    style: {
                      "box-sizing": "border-box",
                      display: "flex",
                      "flex-direction": "column",
                      padding: "24px",
                      height: "844px",
                      "border-radius": "8px",
                      "background-color": "rgb(255, 205, 0)",
                      "box-shadow": "rgba(0, 0, 0, 0.1) 0px 10px 20px 0px",
                    },
                  },
                  [
                    m(
                      "div",
                      { style: { "box-sizing": "border-box", width: "100%" } },
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
                                  position: "absolute",
                                  left: "-159984px",
                                  "box-sizing": "border-box",
                                },
                              }),
                              m(
                                "fieldset",
                                {
                                  style: {
                                    "box-sizing": "border-box",
                                    border: "0px none rgb(51, 51, 51)",
                                    padding: "0px",
                                    margin: "0px",
                                    "min-width": "0px",
                                    flex: "1 1 auto",
                                  },
                                },
                                m(
                                  "correos-ui-input",
                                  {
                                    type: "text",
                                    variant: "tracking-box",
                                    style: {
                                      width: "100%",
                                      "box-sizing": "border-box",
                                      visibility: "visible",
                                      display: "flex",
                                      "--_ui-input-bg-color": "1",
                                      "--_ui-input-bg-light-color": "1",
                                      "--_ui-input-border-radius": "1",
                                      "--_ui-input-border-color": "1",
                                      "--_ui-input-error-color": "1)",
                                      "--_ui-input-disabled-color": "1",
                                      "--_ui-input-field-color": "1",
                                      "--_ui-input-field-color-empty": "1",
                                      "--_ui-input-icon-size": "1",
                                      "--_ui-input-icon-margin-right": "1",
                                      "--_ui-input-label-color": "1",
                                      "--_ui-input-line-color": "1)",
                                      "--_ui-input-line-color-ripple": "1",
                                      "--_ui-input-valid-color": "1",
                                      "--ui-input-bg-light-color": "#ffffff",
                                    },
                                  },
                                  m(
                                    "div",
                                    {
                                      style: {
                                        "box-sizing": "border-box",
                                        width: "100%",
                                        display: "flex",
                                        "flex-wrap": "wrap",
                                        "align-items": "baseline",
                                      },
                                    },
                                    m(
                                      "div",
                                      {
                                        style: {
                                          "box-sizing": "border-box",
                                          "background-color":
                                            "rgb(255, 255, 255)",
                                          width: "100%",
                                          display: "block",
                                          "border-radius": "8px 8px 0px 0px",
                                          "border-top":
                                            "1px solid rgb(148, 148, 148)",
                                          "border-left":
                                            "1px solid rgb(148, 148, 148)",
                                          "border-right":
                                            "1px solid rgb(148, 148, 148)",
                                          "border-bottom-color":
                                            "rgba(0, 0, 0, 0.12)",
                                          "--mdc-ripple-fg-size": "0",
                                          "--mdc-ripple-left": "0",
                                          "--mdc-ripple-top": "0",
                                          "--mdc-ripple-fg-scale": "1",
                                          "--mdc-ripple-fg-translate-end": "0",
                                          "--mdc-ripple-fg-translate-start":
                                            "0",
                                          "-webkit-tap-highlight-color":
                                            "rgba(0, 0, 0, 0)",
                                          height: "56px",
                                          position: "relative",
                                          overflow: "hidden",
                                          "will-change":
                                            "opacity, transform, color",
                                        },
                                      },
                                      [
                                        m("input", {
                                          name: "tracking-number",
                                          type: "text",
                                          autocomplete: "none",
                                          required: "required",
                                          style: {
                                            "box-sizing": "border-box",
                                            "border-bottom-color":
                                              "rgb(255, 205, 0)",
                                            color: "rgb(148, 148, 148)",
                                            "font-family":
                                              "Cartero, 'Helvetica Neue', Helvetica, Arial, sans-serif",
                                            "padding-left": "16px",
                                            "padding-right": "48px",
                                            "box-shadow": "none",
                                            "-webkit-font-smoothing":
                                              "antialiased",
                                            "font-size": "16px",
                                            "font-weight": "400",
                                            "letter-spacing": "0.15px",
                                            "text-decoration":
                                              "none solid rgb(148, 148, 148)",
                                            "text-transform": "none",
                                            "align-self": "flex-end",
                                            width: "100%",
                                            height: "55px",
                                            padding: "20px 48px 6px 16px",
                                            transition:
                                              "opacity 0.15s cubic-bezier(0.4, 0, 0.2, 1)",
                                            "border-top":
                                              "0px none rgb(148, 148, 148)",
                                            "border-right":
                                              "0px none rgb(148, 148, 148)",
                                            "border-left":
                                              "0px none rgb(148, 148, 148)",
                                            "border-image": "none",
                                            "border-bottom":
                                              "1px solid rgb(255, 205, 0)",
                                            "border-radius": "0px",
                                            appearance: "none",
                                            "caret-color": "rgb(98, 0, 238)",
                                          },
                                        }),
                                        m(
                                          "label",
                                          {
                                            for: "tracking-number",
                                            style: {
                                              "box-sizing": "border-box",
                                              "max-width": "calc(100% - 32px)",
                                              "font-family":
                                                "Cartero, 'Helvetica Neue', Helvetica, Arial, sans-serif",
                                              left: "16px",
                                              right: "98.2031px",
                                              top: "27.5px",
                                              transform:
                                                "matrix(1, 0, 0, 1, 0, -9.19531)",
                                              "pointer-events": "none",
                                              color: "rgba(0, 0, 0, 0.6)",
                                              "-webkit-font-smoothing":
                                                "antialiased",
                                              "font-size": "16px",
                                              "font-weight": "400",
                                              "letter-spacing": "0.15px",
                                              "text-decoration":
                                                "none solid rgba(0, 0, 0, 0.6)",
                                              "text-transform": "none",
                                              position: "absolute",
                                              "transform-origin": "0px 0px",
                                              transition:
                                                "transform 0.15s cubic-bezier(0.4, 0, 0.2, 1), color 0.15s cubic-bezier(0.4, 0, 0.2, 1), -webkit-transform 0.15s cubic-bezier(0.4, 0, 0.2, 1)",
                                              "line-height": "18.4px",
                                              "text-align": "left",
                                              "text-overflow": "ellipsis",
                                              "white-space": "nowrap",
                                              cursor: "text",
                                              overflow: "hidden",
                                              "will-change": "transform",
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
                                    "box-sizing": "border-box",
                                    visibility: "visible",
                                    width: "27%",
                                    "margin-left": "16px",
                                    display: "block",
                                    "--_ui-button-bg-color": "#002e6d",
                                    "--_ui-button-bg-color-disabled": "#f3f2f2",
                                    "--_ui-button-bg-color-hover": "#000042",
                                    "--_ui-button-text-color": "#ffffff",
                                    "--_ui-button-border-color": "transparent",
                                    "--_ui-button-border": "none",
                                    "--_ui-button-border-color-disabled":
                                      "#949494",
                                    "--_ui-button-font-family": "1",
                                    "--_ui-button-min-width": "1",
                                    "--_ui-button-border-radius": "1",
                                    "--_ui-button-color": "1",
                                    "--_ui-button-text-color-hover": "1",
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
                                        "min-width": "auto",
                                        "font-size": "16px",
                                        "line-height": "24px",
                                        "box-sizing": "border-box",
                                        width: "100%",
                                        color: "rgb(255, 255, 255)",
                                        "background-color": "rgb(0, 46, 109)",
                                        "border-color": "rgba(0, 0, 0, 0)",
                                        height: "56px",
                                        border: "0px none rgba(0, 0, 0, 0)",
                                        "text-transform": "none",
                                        "font-weight": "700",
                                        "border-radius": "8px",
                                        padding: "0px 24px",
                                        "--mdc-ripple-fg-opacity": "0.12",
                                        "--mdc-ripple-fg-size": "0",
                                        "--mdc-ripple-left": "0",
                                        "--mdc-ripple-top": "0",
                                        "--mdc-ripple-fg-scale": "1",
                                        "--mdc-ripple-fg-translate-end": "0",
                                        "--mdc-ripple-fg-translate-start": "0",
                                        "-webkit-tap-highlight-color":
                                          "rgba(0, 0, 0, 0)",
                                        "font-family": "Roboto, sans-serif",
                                        "-webkit-font-smoothing": "antialiased",
                                        "letter-spacing": "1.42857px",
                                        "text-decoration":
                                          "none solid rgb(255, 255, 255)",
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
                                          height: "56px",
                                          overflow: "hidden",
                                        },
                                      }),
                                      m("i", {
                                        slot: "icon-left",
                                        style: {
                                          "box-sizing": "border-box",
                                          display: "none",
                                          "justify-content": "flex-end",
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
                                          "margin-right": "16px",
                                        },
                                      }),
                                      m(
                                        "span",
                                        {
                                          style: {
                                            "box-sizing": "border-box",
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
                            "box-sizing": "border-box",
                            "margin-top": "7px",
                            "margin-bottom": "40px",
                            color: "rgb(255, 205, 0)",
                            "text-decoration": "none solid rgb(255, 205, 0)",
                            display: "flex",
                          },
                        }),
                      ]
                    ),
                    m("div", { style: { "box-sizing": "border-box" } }, [
                      m(
                        "section",
                        {
                          slot: "tool-first",
                          style: {
                            "box-sizing": "border-box",
                            width: "100%",
                            "margin-bottom": "15px",
                          },
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
                              "box-sizing": "border-box",
                              visibility: "visible",
                              "justify-content": "flex-start",
                              display: "flex",
                              height: "74px",
                              width: "100%",
                              "align-items": "center",
                              "box-shadow":
                                "rgba(0, 0, 0, 0.1) 0px 10px 20px 0px",
                              "border-radius": "8px",
                              "background-color": "rgb(255, 255, 255)",
                              transition:
                                "box-shadow 0.2s ease-in-out, -webkit-box-shadow 0.2s ease-in-out",
                              border: "1px solid rgb(203, 203, 203)",
                              "--_ui-card-bg-color": "1",
                              "--_ui-card-border-radius": "1",
                              "--_ui-card-border-color": "1",
                              "--_ui-card-icon-bg-color": "1",
                              "--_ui-card-border-shadow":
                                "0 10px 20px 0 rgba(0, 0, 0, 0.1)",
                              "--_ui-card-border-shadow-hover":
                                "0 10px 20px 0 rgba(0, 0, 0, 0.25)",
                              "--_ui-card-text-color": "1",
                              "--_ui-card-border-active": "1",
                              "--_ui-card-bg-image": "1",
                              "--_ui-card-color-icon": "1",
                              "--_ui-card-color-description": "1",
                            },
                          },
                          m(
                            "a",
                            {
                              href: "/es/es/herramientas/oficinas-buzones-citypaq/detalle",
                              target: "_self",
                              style: {
                                "box-sizing": "border-box",
                                display: "flex",
                                "flex-direction": "row",
                                width: "100%",
                                "align-items": "center",
                                "text-decoration": "none solid rgb(0, 0, 238)",
                                padding: "16px",
                              },
                            },
                            m(
                              "div",
                              {
                                style: {
                                  "box-sizing": "border-box",
                                  "flex-direction": "row",
                                  display: "flex",
                                  "align-items": "center",
                                },
                              },
                              [
                                m("img", {
                                  slot: "image",
                                  src: "./img/localizador.svg",
                                  alt: "",
                                  style: {
                                    "box-sizing": "border-box",
                                    "margin-bottom": "0px",
                                    "margin-right": "16px",
                                    display: "block",
                                    width: "40px",
                                    height: "40px",
                                  },
                                }),
                                m(
                                  "p",
                                  {
                                    slot: "text",
                                    style: {
                                      "font-size": "16px",
                                      "line-height": "24px",
                                      "box-sizing": "border-box",
                                      "text-align": "left",
                                      margin: "0px",
                                      padding: "0px",
                                      "font-weight": "400",
                                      color: "rgb(0, 46, 109)",
                                    },
                                  },
                                  "Localiza oficinas, buzones y Citypaq"
                                ),
                              ]
                            )
                          )
                        )
                      ),
                      m(
                        "section",
                        {
                          slot: "tool-second",
                          style: {
                            "box-sizing": "border-box",
                            width: "100%",
                            "margin-bottom": "15px",
                          },
                        },
                        m(
                          "correos-ui-card",
                          {
                            "href-link":
                              "/es/es/herramientas/codigos-postales/detalle",
                            target: "_self",
                            "component-type": "card",
                            "component-title": "Sigue tu envío",
                            size: "lg",
                            style: {
                              "box-sizing": "border-box",
                              visibility: "visible",
                              "justify-content": "flex-start",
                              display: "flex",
                              height: "74px",
                              width: "100%",
                              "align-items": "center",
                              "box-shadow":
                                "rgba(0, 0, 0, 0.1) 0px 10px 20px 0px",
                              "border-radius": "8px",
                              "background-color": "rgb(255, 255, 255)",
                              transition:
                                "box-shadow 0.2s ease-in-out, -webkit-box-shadow 0.2s ease-in-out",
                              border: "1px solid rgb(203, 203, 203)",
                              "--_ui-card-bg-color": "1",
                              "--_ui-card-border-radius": "1",
                              "--_ui-card-border-color": "1",
                              "--_ui-card-icon-bg-color": "1",
                              "--_ui-card-border-shadow":
                                "0 10px 20px 0 rgba(0, 0, 0, 0.1)",
                              "--_ui-card-border-shadow-hover":
                                "0 10px 20px 0 rgba(0, 0, 0, 0.25)",
                              "--_ui-card-text-color": "1",
                              "--_ui-card-border-active": "1",
                              "--_ui-card-bg-image": "1",
                              "--_ui-card-color-icon": "1",
                              "--_ui-card-color-description": "1",
                            },
                          },
                          m(
                            "a",
                            {
                              href: "/es/es/herramientas/codigos-postales/detalle",
                              target: "_self",
                              style: {
                                "box-sizing": "border-box",
                                display: "flex",
                                "flex-direction": "row",
                                width: "100%",
                                "align-items": "center",
                                "text-decoration": "none solid rgb(0, 0, 238)",
                                padding: "16px",
                              },
                            },
                            m(
                              "div",
                              {
                                style: {
                                  "box-sizing": "border-box",
                                  "flex-direction": "row",
                                  display: "flex",
                                  "align-items": "center",
                                },
                              },
                              [
                                m("img", {
                                  slot: "image",
                                  src: "./img/encuentra_cp.svg",
                                  alt: "",
                                  style: {
                                    "box-sizing": "border-box",
                                    "margin-bottom": "0px",
                                    "margin-right": "16px",
                                    display: "block",
                                    width: "40px",
                                    height: "40px",
                                  },
                                }),
                                m(
                                  "p",
                                  {
                                    slot: "text",
                                    style: {
                                      "font-size": "16px",
                                      "line-height": "24px",
                                      "box-sizing": "border-box",
                                      "text-align": "left",
                                      margin: "0px",
                                      padding: "0px",
                                      "font-weight": "400",
                                      color: "rgb(0, 46, 109)",
                                    },
                                  },
                                  "Encuentra códigos postales"
                                ),
                              ]
                            )
                          )
                        )
                      ),
                      m(
                        "section",
                        {
                          slot: "tool-third",
                          style: {
                            "box-sizing": "border-box",
                            "margin-bottom": "0px",
                            width: "100%",
                          },
                        },
                        m(
                          "correos-ui-card",
                          {
                            "href-link":
                              "/es/es/atencion-al-cliente/seguridad-de-la-informacion/verificador-de-email",
                            target: "_self",
                            "component-type": "card",
                            "component-title": "Sigue tu envío",
                            size: "lg",
                            style: {
                              "box-sizing": "border-box",
                              visibility: "visible",
                              "justify-content": "flex-start",
                              display: "flex",
                              height: "74px",
                              width: "100%",
                              "align-items": "center",
                              "box-shadow":
                                "rgba(0, 0, 0, 0.1) 0px 10px 20px 0px",
                              "border-radius": "8px",
                              "background-color": "rgb(255, 255, 255)",
                              transition:
                                "box-shadow 0.2s ease-in-out, -webkit-box-shadow 0.2s ease-in-out",
                              border: "1px solid rgb(203, 203, 203)",
                              "--_ui-card-bg-color": "1",
                              "--_ui-card-border-radius": "1",
                              "--_ui-card-border-color": "1",
                              "--_ui-card-icon-bg-color": "1",
                              "--_ui-card-border-shadow":
                                "0 10px 20px 0 rgba(0, 0, 0, 0.1)",
                              "--_ui-card-border-shadow-hover":
                                "0 10px 20px 0 rgba(0, 0, 0, 0.25)",
                              "--_ui-card-text-color": "1",
                              "--_ui-card-border-active": "1",
                              "--_ui-card-bg-image": "1",
                              "--_ui-card-color-icon": "1",
                              "--_ui-card-color-description": "1",
                            },
                          },
                          m(
                            "a",
                            {
                              href: "/es/es/atencion-al-cliente/seguridad-de-la-informacion/verificador-de-email",
                              target: "_self",
                              style: {
                                "box-sizing": "border-box",
                                display: "flex",
                                "flex-direction": "row",
                                width: "100%",
                                "align-items": "center",
                                "text-decoration": "none solid rgb(0, 0, 238)",
                                padding: "16px",
                              },
                            },
                            m(
                              "div",
                              {
                                style: {
                                  "box-sizing": "border-box",
                                  "flex-direction": "row",
                                  display: "flex",
                                  "align-items": "center",
                                },
                              },
                              [
                                m("img", {
                                  slot: "image",
                                  src: "./img/gnomo.svg",
                                  alt: "",
                                  style: {
                                    "box-sizing": "border-box",
                                    "margin-bottom": "0px",
                                    "margin-right": "16px",
                                    display: "block",
                                    width: "40px",
                                    height: "40px",
                                  },
                                }),
                                m(
                                  "p",
                                  {
                                    slot: "text",
                                    style: {
                                      "font-size": "16px",
                                      "line-height": "24px",
                                      "box-sizing": "border-box",
                                      "text-align": "left",
                                      margin: "0px",
                                      padding: "0px",
                                      "font-weight": "400",
                                      color: "rgb(0, 46, 109)",
                                    },
                                  },
                                  "Verificador de email"
                                ),
                              ]
                            )
                          )
                        )
                      ),
                    ]),
                  ]
                )
              ),
            ]
          ),
          m(
            "correos-cdk-section-box",
            {
              "bg-color": "var(--theme-color-coolGrey)",
              "center-content": "false",
              style: {
                margin: "0 16px", // Espacio entre los hijos
                display: "flex", // Usar flex para centrar contenido
                justifyContent: "center", // Centra el contenido dentro del hijo
                alignItems: "center", // Alinea verticalmente el contenido dentro del hijo
                width: "600px", // Ancho fijo para el hijo (opcional)
                //height: "50px", // Altura fija para el hijo (opcional)
                border: "1px solid #ccc", // Solo para visualización
                "--cdk-section-box-background-color":
                  "var(--theme-color-coolGrey)",
                "box-sizing": "border-box",
                visibility: "visible",
                "background-color": "rgb(243, 242, 242)",
                display: "block",
                padding: "0px",
                "--_background-color": "1",
                "--_section-box-padding-top-desktop-sm": "1",
                "--_section-box-padding-bottom-desktop-sm": "1",
                "--_section-box-padding-top-mobile-tablet-sm": "1",
                "--_section-box-padding-bottom-mobile-tablet-sm": "1",
                "--_section-box-padding-top-desktop-lg": "1",
                "--_section-box-padding-bottom-desktop-lg": "1",
                "--_section-box-padding-top-mobile-tablet-lg": "1",
                "--_section-box-padding-bottom-mobile-tablet-lg": "1",
              },
            },
            m(
              "div",
              { style: { "box-sizing": "border-box" } },
              m(
                "div",
                {
                  style: {
                    "box-sizing": "border-box",
                    "max-width": "none",
                    "padding-left": "0px",
                    "padding-right": "0px",
                    "margin-left": "auto",
                    "margin-right": "auto",
                  },
                },
                m(
                  "div",
                  { slot: "block", style: { "box-sizing": "border-box" } },
                  m(
                    "correos-cdk-shipping-starter",
                    {
                      title: "Servicio especial de paquetería",
                      subtitle: "Envíos económicos con recogida a domicilio",
                      "postal-code-title": "¿Dónde quieres realizar el envío?",
                      "postal-code-origin-label": "Código postal origen",
                      "postal-code-destination-label": "Código postal destino",
                      "postal-code-error": "Introduce un código postal válido",
                      "restricted-postal-code-error":
                        "En esta oferta no es posible enviar a Islas Canarias, Ceuta o Melilla",
                      "preset-title": "¿Qué tamaño y peso tiene?",
                      "button-text": "COMENZAR ENVÍO",
                      "button-theme": "primary",
                      "more-info-button-text": "MÁS INFO",
                      "more-info-button-href":
                        "/es/es/particulares/enviar/envios-nacionales/envios-economicos/servicio-especial-de-paqueteria",
                      "more-info-button-target": "_self",
                      "redirect-url":
                        "https://mioficina.correos.es/es/es/oferta-especial-paqueteria/detalle",
                      "redirect-target": "_self",
                      "default-size-logo":
                        "/etc.clientlibs/correos/clientlibs/clientlib-base/resources/assets/images/envio_pequeno.svg",
                      "with-border": "true",
                      "bg-color": "var(--theme-color-white-plain)",
                      "weight-limit-text": "Hasta",
                      "weight-unit": "kg",
                      "dimensions-text": "Dimensión:",
                      "default-sizes":
                        "[{&quot;friendly_size_code&quot;:2,&quot;heigth&quot;:&quot;9&quot;,&quot;width&quot;:&quot;23&quot;,&quot;weight&quot;:&quot;2000&quot;,&quot;friendly_size_name&quot;:&quot;Tamaño S&quot;,&quot;friendly_size_logo&quot;:&quot;/content/dam/cex-site/resources/images/envio_pequeno.svg&quot;,&quot;long&quot;:&quot;39&quot;},{&quot;friendly_size_code&quot;:3,&quot;heigth&quot;:&quot;9&quot;,&quot;width&quot;:&quot;23&quot;,&quot;weight&quot;:&quot;2000&quot;,&quot;friendly_size_name&quot;:&quot;Tamaño M&quot;,&quot;friendly_size_logo&quot;:&quot;/content/dam/cex-site/resources/images/envio_mediano.svg&quot;,&quot;long&quot;:&quot;39&quot;},{&quot;friendly_size_code&quot;:4,&quot;heigth&quot;:&quot;9&quot;,&quot;width&quot;:&quot;23&quot;,&quot;weight&quot;:&quot;2000&quot;,&quot;friendly_size_name&quot;:&quot;Tamaño L&quot;,&quot;friendly_size_logo&quot;:&quot;/content/dam/cex-site/resources/images/envio_grande.svg&quot;,&quot;long&quot;:&quot;39&quot;},{&quot;friendly_size_code&quot;:5,&quot;heigth&quot;:&quot;9&quot;,&quot;width&quot;:&quot;23&quot;,&quot;weight&quot;:&quot;2000&quot;,&quot;friendly_size_name&quot;:&quot;Tamaño XL&quot;,&quot;friendly_size_logo&quot;:&quot;/content/dam/cex-site/resources/images/envio_extragrande.svg&quot;,&quot;long&quot;:&quot;39&quot;}]",
                      "card-error":
                        "Indica todos los campos antes de realizar el envío",
                      "price-text": "Desde",
                      price: "4,02€",
                      categories:
                        "[{&quot;default&quot;:false,&quot;name&quot;:&quot;Paquetería&quot;,&quot;id&quot;:&quot;1&quot;}]",
                      "default-pilgrim-sizes":
                        "[{&quot;friendly_size_code&quot;:2,&quot;heigth&quot;:5,&quot;width&quot;:5,&quot;weight&quot;:&quot;200&quot;,&quot;friendly_size_name&quot;:&quot;Tamaño S&quot;,&quot;friendly_size_logo&quot;:&quot;/content/dam/cex-site/resources/images/envio_pequeno.svg&quot;,&quot;long&quot;:5},{&quot;friendly_size_code&quot;:3,&quot;heigth&quot;:10,&quot;width&quot;:10,&quot;weight&quot;:&quot;500&quot;,&quot;friendly_size_name&quot;:&quot;Tamaño M&quot;,&quot;friendly_size_logo&quot;:&quot;/content/dam/cex-site/resources/images/envio_mediano.svg&quot;,&quot;long&quot;:10},{&quot;friendly_size_code&quot;:4,&quot;heigth&quot;:15,&quot;width&quot;:15,&quot;weight&quot;:&quot;1000&quot;,&quot;friendly_size_name&quot;:&quot;Tamaño L&quot;,&quot;friendly_size_logo&quot;:&quot;/content/dam/cex-site/resources/images/envio_grande.svg&quot;,&quot;long&quot;:15},{&quot;friendly_size_code&quot;:5,&quot;heigth&quot;:20,&quot;width&quot;:20,&quot;weight&quot;:&quot;2000&quot;,&quot;friendly_size_name&quot;:&quot;Tamaño XL&quot;,&quot;friendly_size_logo&quot;:&quot;/content/dam/cex-site/resources/images/envio_extragrande.svg&quot;,&quot;long&quot;:20}]",
                      size: "sm",
                      style: {
                        "background-color": "var(--theme-color-white-plain)",
                        padding: "24px",
                        "box-sizing": "border-box",
                        visibility: "visible",
                        border: "1px solid rgb(203, 203, 203)",
                        "box-shadow": "rgba(0, 0, 0, 0.2) 0px 10px 20px 0px",
                        display: "block",
                        width: "100%",
                        "border-radius": "8px",
                        "--_cdk-shipping-starter-background-color": "1",
                      },
                    },
                    m(
                      "div",
                      { style: { "box-sizing": "border-box" } },
                      m("div", { style: { "box-sizing": "border-box" } }, [
                        m(
                          "div",
                          {
                            style: {
                              "box-sizing": "border-box",
                              display: "flex",
                              "justify-content": "space-between",
                              "flex-direction": "column",
                            },
                          },
                          [
                            m(
                              "h3",
                              {
                                style: {
                                  "font-size": "24px",
                                  "line-height": "36px",
                                  "box-sizing": "border-box",
                                  display: "block",
                                  margin: "0px 0px 16px",
                                  padding: "0px",
                                  "font-weight": "400",
                                },
                              },
                              "Servicio especial de paquetería"
                            ),
                            m(
                              "div",
                              {
                                style: {
                                  "font-size": "18px",
                                  "line-height": "30px",
                                  "box-sizing": "border-box",
                                  display: "flex",
                                  "align-items": "flex-end",
                                  margin: "0px 0px 16px",
                                  padding: "0px",
                                  "font-weight": "400",
                                },
                              },
                              [
                                m(
                                  "span",
                                  {
                                    style: {
                                      "margin-bottom": "2px",
                                      "box-sizing": "border-box",
                                      "margin-right": "4px",
                                    },
                                  },
                                  "Desde"
                                ),
                                m(
                                  "span",
                                  {
                                    style: {
                                      "font-size": "18px",
                                      "line-height": "36px",
                                      "box-sizing": "border-box",
                                      margin: "0px",
                                      padding: "0px",
                                      "font-weight": "400",
                                    },
                                  },
                                  "4,02€"
                                ),
                              ]
                            ),
                          ]
                        ),
                        m(
                          "p",
                          {
                            style: {
                              "font-size": "18px",
                              "line-height": "30px",
                              "box-sizing": "border-box",
                              display: "block",
                              margin: "0px",
                              padding: "0px",
                              "font-weight": "300",
                            },
                          },
                          "Envíos económicos con recogida a domicilio"
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
                                  "font-size": "18px",
                                  "line-height": "30px",
                                  "box-sizing": "border-box",
                                  display: "block",
                                  margin: "0px 0px 8px",
                                  padding: "0px",
                                  "font-weight": "400",
                                },
                              },
                              "¿Dónde quieres realizar el envío?"
                            ),
                            m(
                              "div",
                              {
                                style: {
                                  "box-sizing": "border-box",
                                  display: "block",
                                },
                              },
                              [
                                m(
                                  "correos-ui-input",
                                  {
                                    type: "text",
                                    style: {
                                      width: "100%",
                                      "box-sizing": "border-box",
                                      visibility: "visible",
                                      display: "flex",
                                      "--_ui-input-bg-color": "1",
                                      "--_ui-input-bg-light-color": "1",
                                      "--_ui-input-border-radius": "1",
                                      "--_ui-input-border-color": "1",
                                      "--_ui-input-error-color": "1)",
                                      "--_ui-input-disabled-color": "1",
                                      "--_ui-input-field-color": "1",
                                      "--_ui-input-field-color-empty": "1",
                                      "--_ui-input-icon-size": "1",
                                      "--_ui-input-icon-margin-right": "1",
                                      "--_ui-input-label-color": "1",
                                      "--_ui-input-line-color": "1)",
                                      "--_ui-input-line-color-ripple": "1",
                                      "--_ui-input-valid-color": "1",
                                      "--ui-input-bg-light-color": "#ffffff",
                                      "max-width": "250px",
                                      "margin-right": "32px",
                                      "margin-bottom": "16px",
                                    },
                                  },
                                  m(
                                    "div",
                                    {
                                      style: {
                                        "box-sizing": "border-box",
                                        width: "100%",
                                        display: "flex",
                                        "flex-wrap": "wrap",
                                        "align-items": "baseline",
                                      },
                                    },
                                    m(
                                      "div",
                                      {
                                        style: {
                                          "box-sizing": "border-box",
                                          "background-color":
                                            "rgb(243, 242, 242)",
                                          width: "100%",
                                          display: "block",
                                          "border-radius": "8px 8px 0px 0px",
                                          "border-top":
                                            "1px solid rgb(148, 148, 148)",
                                          "border-left":
                                            "1px solid rgb(148, 148, 148)",
                                          "border-right":
                                            "1px solid rgb(148, 148, 148)",
                                          "border-bottom-color":
                                            "rgba(0, 0, 0, 0.12)",
                                          "--mdc-ripple-fg-size": "0",
                                          "--mdc-ripple-left": "0",
                                          "--mdc-ripple-top": "0",
                                          "--mdc-ripple-fg-scale": "1",
                                          "--mdc-ripple-fg-translate-end": "0",
                                          "--mdc-ripple-fg-translate-start":
                                            "0",
                                          "-webkit-tap-highlight-color":
                                            "rgba(0, 0, 0, 0)",
                                          height: "56px",
                                          position: "relative",
                                          overflow: "hidden",
                                          "will-change":
                                            "opacity, transform, color",
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
                                            "box-sizing": "border-box",
                                            "border-bottom-color":
                                              "rgb(255, 205, 0)",
                                            color: "rgb(148, 148, 148)",
                                            "font-family":
                                              "Cartero, 'Helvetica Neue', Helvetica, Arial, sans-serif",
                                            "padding-left": "16px",
                                            "padding-right": "48px",
                                            "box-shadow": "none",
                                            "-webkit-font-smoothing":
                                              "antialiased",
                                            "font-size": "16px",
                                            "font-weight": "400",
                                            "letter-spacing": "0.15px",
                                            "text-decoration":
                                              "none solid rgb(148, 148, 148)",
                                            "text-transform": "none",
                                            "align-self": "flex-end",
                                            width: "100%",
                                            height: "55px",
                                            padding: "20px 48px 6px 16px",
                                            transition:
                                              "opacity 0.15s cubic-bezier(0.4, 0, 0.2, 1)",
                                            "border-top":
                                              "0px none rgb(148, 148, 148)",
                                            "border-right":
                                              "0px none rgb(148, 148, 148)",
                                            "border-left":
                                              "0px none rgb(148, 148, 148)",
                                            "border-image": "none",
                                            "border-bottom":
                                              "1px solid rgb(255, 205, 0)",
                                            "border-radius": "0px",
                                            appearance: "none",
                                            "caret-color": "rgb(98, 0, 238)",
                                          },
                                        }),
                                        m(
                                          "label",
                                          {
                                            for: "postalcodeorigin",
                                            style: {
                                              "box-sizing": "border-box",
                                              "max-width": "calc(100% - 32px)",
                                              "font-family":
                                                "Cartero, 'Helvetica Neue', Helvetica, Arial, sans-serif",
                                              left: "16px",
                                              right: "70.75px",
                                              top: "27.5px",
                                              transform:
                                                "matrix(1, 0, 0, 1, 0, -9.19531)",
                                              "pointer-events": "none",
                                              color: "rgba(0, 0, 0, 0.6)",
                                              "-webkit-font-smoothing":
                                                "antialiased",
                                              "font-size": "16px",
                                              "font-weight": "400",
                                              "letter-spacing": "0.15px",
                                              "text-decoration":
                                                "none solid rgba(0, 0, 0, 0.6)",
                                              "text-transform": "none",
                                              position: "absolute",
                                              "transform-origin": "0px 0px",
                                              transition:
                                                "transform 0.15s cubic-bezier(0.4, 0, 0.2, 1), color 0.15s cubic-bezier(0.4, 0, 0.2, 1), -webkit-transform 0.15s cubic-bezier(0.4, 0, 0.2, 1)",
                                              "line-height": "18.4px",
                                              "text-align": "left",
                                              "text-overflow": "ellipsis",
                                              "white-space": "nowrap",
                                              cursor: "text",
                                              overflow: "hidden",
                                              "will-change": "transform",
                                            },
                                          },
                                          "Código postal origen*"
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
                                ),
                                m(
                                  "correos-ui-input",
                                  {
                                    type: "text",
                                    style: {
                                      width: "100%",
                                      "box-sizing": "border-box",
                                      visibility: "visible",
                                      display: "flex",
                                      "--_ui-input-bg-color": "1",
                                      "--_ui-input-bg-light-color": "1",
                                      "--_ui-input-border-radius": "1",
                                      "--_ui-input-border-color": "1",
                                      "--_ui-input-error-color": "1)",
                                      "--_ui-input-disabled-color": "1",
                                      "--_ui-input-field-color": "1",
                                      "--_ui-input-field-color-empty": "1",
                                      "--_ui-input-icon-size": "1",
                                      "--_ui-input-icon-margin-right": "1",
                                      "--_ui-input-label-color": "1",
                                      "--_ui-input-line-color": "1)",
                                      "--_ui-input-line-color-ripple": "1",
                                      "--_ui-input-valid-color": "1",
                                      "--ui-input-bg-light-color": "#ffffff",
                                      "max-width": "250px",
                                      "margin-right": "32px",
                                      "margin-bottom": "16px",
                                    },
                                  },
                                  m(
                                    "div",
                                    {
                                      style: {
                                        "box-sizing": "border-box",
                                        width: "100%",
                                        display: "flex",
                                        "flex-wrap": "wrap",
                                        "align-items": "baseline",
                                      },
                                    },
                                    m(
                                      "div",
                                      {
                                        style: {
                                          "box-sizing": "border-box",
                                          "background-color":
                                            "rgb(243, 242, 242)",
                                          width: "100%",
                                          display: "block",
                                          "border-radius": "8px 8px 0px 0px",
                                          "border-top":
                                            "1px solid rgb(148, 148, 148)",
                                          "border-left":
                                            "1px solid rgb(148, 148, 148)",
                                          "border-right":
                                            "1px solid rgb(148, 148, 148)",
                                          "border-bottom-color":
                                            "rgba(0, 0, 0, 0.12)",
                                          "--mdc-ripple-fg-size": "0",
                                          "--mdc-ripple-left": "0",
                                          "--mdc-ripple-top": "0",
                                          "--mdc-ripple-fg-scale": "1",
                                          "--mdc-ripple-fg-translate-end": "0",
                                          "--mdc-ripple-fg-translate-start":
                                            "0",
                                          "-webkit-tap-highlight-color":
                                            "rgba(0, 0, 0, 0)",
                                          height: "56px",
                                          position: "relative",
                                          overflow: "hidden",
                                          "will-change":
                                            "opacity, transform, color",
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
                                            "box-sizing": "border-box",
                                            "border-bottom-color":
                                              "rgb(255, 205, 0)",
                                            color: "rgb(148, 148, 148)",
                                            "font-family":
                                              "Cartero, 'Helvetica Neue', Helvetica, Arial, sans-serif",
                                            "padding-left": "16px",
                                            "padding-right": "48px",
                                            "box-shadow": "none",
                                            "-webkit-font-smoothing":
                                              "antialiased",
                                            "font-size": "16px",
                                            "font-weight": "400",
                                            "letter-spacing": "0.15px",
                                            "text-decoration":
                                              "none solid rgb(148, 148, 148)",
                                            "text-transform": "none",
                                            "align-self": "flex-end",
                                            width: "100%",
                                            height: "55px",
                                            padding: "20px 48px 6px 16px",
                                            transition:
                                              "opacity 0.15s cubic-bezier(0.4, 0, 0.2, 1)",
                                            "border-top":
                                              "0px none rgb(148, 148, 148)",
                                            "border-right":
                                              "0px none rgb(148, 148, 148)",
                                            "border-left":
                                              "0px none rgb(148, 148, 148)",
                                            "border-image": "none",
                                            "border-bottom":
                                              "1px solid rgb(255, 205, 0)",
                                            "border-radius": "0px",
                                            appearance: "none",
                                            "caret-color": "rgb(98, 0, 238)",
                                          },
                                        }),
                                        m(
                                          "label",
                                          {
                                            for: "postalcodedestination",
                                            style: {
                                              "box-sizing": "border-box",
                                              "max-width": "calc(100% - 32px)",
                                              "font-family":
                                                "Cartero, 'Helvetica Neue', Helvetica, Arial, sans-serif",
                                              left: "16px",
                                              right: "63.4062px",
                                              top: "27.5px",
                                              transform:
                                                "matrix(1, 0, 0, 1, 0, -9.19531)",
                                              "pointer-events": "none",
                                              color: "rgba(0, 0, 0, 0.6)",
                                              "-webkit-font-smoothing":
                                                "antialiased",
                                              "font-size": "16px",
                                              "font-weight": "400",
                                              "letter-spacing": "0.15px",
                                              "text-decoration":
                                                "none solid rgba(0, 0, 0, 0.6)",
                                              "text-transform": "none",
                                              position: "absolute",
                                              "transform-origin": "0px 0px",
                                              transition:
                                                "transform 0.15s cubic-bezier(0.4, 0, 0.2, 1), color 0.15s cubic-bezier(0.4, 0, 0.2, 1), -webkit-transform 0.15s cubic-bezier(0.4, 0, 0.2, 1)",
                                              "line-height": "18.4px",
                                              "text-align": "left",
                                              "text-overflow": "ellipsis",
                                              "white-space": "nowrap",
                                              cursor: "text",
                                              overflow: "hidden",
                                              "will-change": "transform",
                                            },
                                          },
                                          "Código postal destino*"
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
                                  "font-size": "18px",
                                  "line-height": "30px",
                                  "box-sizing": "border-box",
                                  display: "block",
                                  margin: "0px 0px 8px",
                                  padding: "0px",
                                  "font-weight": "400",
                                },
                              },
                              "¿Qué tamaño y peso tiene?"
                            ),
                            m("span", {
                              style: {
                                "font-size": "16px",
                                "line-height": "24px",
                                "box-sizing": "border-box",
                                display: "none",
                                margin: "0px 0px 24px",
                                padding: "0px",
                                "font-weight": "300",
                              },
                            }),
                            m(
                              "correos-cdk-cards-size",
                              {
                                variant: "cards-container-responsive",
                                size: "xs",
                                style: {
                                  "flex-direction": "column",
                                  "box-sizing": "border-box",
                                  visibility: "visible",
                                  "column-gap": "16px",
                                  display: "flex",
                                  width: "100%",
                                  gap: "8px 16px",
                                  "grid-template-columns":
                                    "calc(50% - 4px) calc(50% - 4px)",
                                  "--_cdk-cards-size-background-color": "1",
                                },
                              },
                              [
                                m(
                                  "correos-ui-card-size",
                                  {
                                    slot: "cards",
                                    variant: "small-card-mobile",
                                    style: {
                                      display: "flex",
                                      "box-sizing": "border-box",
                                      visibility: "visible",
                                      height: "76px",
                                      width: "100%",
                                      "justify-content": "center",
                                      border: "1px solid rgb(203, 203, 203)",
                                      "border-radius": "8px",
                                      "background-color": "rgb(255, 255, 255)",
                                      "box-shadow":
                                        "rgba(0, 0, 0, 0.1) 0px 10px 20px 0px",
                                      cursor: "pointer",
                                      "--_ui-card-size-bg-color": "1",
                                      "--_ui-card-size-border-radius": "1",
                                      "--_ui-card-size-box-shadow":
                                        "0 10px 20px 0 rgba(0, 0, 0, 0.1)",
                                      "--_ui-card-size-color-text": "1",
                                      "--_ui-card-size-border-active":
                                        "2px solid 1",
                                      "--_ui-card-size-box-shadow-active":
                                        "0 5px 10px 0 rgba(0, 0, 0, 0.1)",
                                      "--_ui-card-size-border-desktop":
                                        "1px solid 1",
                                    },
                                  },
                                  m(
                                    "button",
                                    {
                                      style: {
                                        padding: "16px",
                                        "box-sizing": "border-box",
                                        border: "0px none rgb(51, 51, 51)",
                                        cursor: "pointer",
                                        margin: "0px",
                                        overflow: "visible",
                                        background:
                                          "rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box",
                                        color: "rgb(51, 51, 51)",
                                        "-webkit-font-smoothing": "antialiased",
                                        appearance: "none",
                                        display: "flex",
                                        "flex-direction": "row",
                                        "align-items": "center",
                                        "justify-content": "flex-start",
                                        "text-decoration":
                                          "none solid rgb(51, 51, 51)",
                                        width: "100%",
                                        height: "74px",
                                      },
                                    },
                                    [
                                      m(
                                        "figure",
                                        {
                                          style: {
                                            "box-sizing": "border-box",
                                            margin: "0px",
                                            display: "flex",
                                            "align-items": "center",
                                            "text-align": "center",
                                            "justify-content": "center",
                                            "max-width": "60px",
                                            "max-height": "60px",
                                          },
                                        },
                                        m("img", {
                                          slot: "header-img",
                                          src: "data:image/svg+xml;base64, PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMTkzcHgiIGhlaWdodD0iMTYxcHgiIHZpZXdCb3g9IjAgMCAxOTMgMTYxIiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgogICAgPHRpdGxlPmF0b21zL2ltZy9pbHVzdHJhY2lvbmVzL3NpemUvZW52aW9fcGVxdWXDsW88L3RpdGxlPgogICAgPGRlZnM+CiAgICAgICAgPHBvbHlnb24gaWQ9InBhdGgtMSIgcG9pbnRzPSIwIDAuMDI2NzgyNDg2NCAxOTIuMTkyOTc4IDAuMDI2NzgyNDg2NCAxOTIuMTkyOTc4IDEzNC41NiAwIDEzNC41NiI+PC9wb2x5Z29uPgogICAgICAgIDxwb2x5Z29uIGlkPSJwYXRoLTMiIHBvaW50cz0iMCAxNTkuNDAxNCAxOTIuMTkzNDQgMTU5LjQwMTQgMTkyLjE5MzQ0IDAgMCAwIj48L3BvbHlnb24+CiAgICA8L2RlZnM+CiAgICA8ZyBpZD0iVUktS0lUIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8ZyBpZD0iQ29ycmVvc193ZWJfVUlraXRfNTRfSWxsdXN0cmF0aW9ucyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTgzLjAwMDAwMCwgLTQ5ODcuMDAwMDAwKSI+CiAgICAgICAgICAgIDxnIGlkPSJHcm91cCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNjQuMDAwMDAwLCA0OTUyLjAwMDAwMCkiPgogICAgICAgICAgICAgICAgPGcgaWQ9Ikdyb3VwLTE0IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxOS43MjAwMDAsIDM1Ljk2MDAwMCkiPgogICAgICAgICAgICAgICAgICAgIDxnIGlkPSJHcm91cC0zIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwLjAwMDAwMCwgMjQuODQxNDAwKSI+CiAgICAgICAgICAgICAgICAgICAgICAgIDxtYXNrIGlkPSJtYXNrLTIiIGZpbGw9IndoaXRlIj4KICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1c2UgeGxpbms6aHJlZj0iI3BhdGgtMSI+PC91c2U+CiAgICAgICAgICAgICAgICAgICAgICAgIDwvbWFzaz4KICAgICAgICAgICAgICAgICAgICAgICAgPGcgaWQ9IkNsaXAtMiI+PC9nPgogICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMTkuOTU3OCwzMC44NjE1NjggQy0xMy4zMTQ0OCw0Ni42OTkwNDggLTExLjcyNzYsMTA3LjI4NDY4OCA3Ny4yMTA3NiwxMzEuMzY4NjA4IEMxNjYuMTUwMjgsMTU1LjQ1MDIwOCAyMTkuODIyMzIsMzYuMjEzODA4IDE3Ny40Mjg5NiwxMC4xMDY4NDggQzEzNS4wMzY3NiwtMTUuOTk3NzkyIDUzLjIyODkyLDE1LjAyNDA4OCAxOS45NTc4LDMwLjg2MTU2OCIgaWQ9IkZpbGwtMSIgZmlsbD0iI0YzRjJGMiIgbWFzaz0idXJsKCNtYXNrLTIpIj48L3BhdGg+CiAgICAgICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0xMzcuMDM5MDM2LDEyNS4yNTMyMDQgTDU0LjI3MDcxNiwxMjUuMjUzMjA0IEw1NC4yNzA3MTYsMi44NDUzNjQgTDEzNy4wMzkwMzYsMi44NDUzNjQgQzE0Mi43NTc4MzYsMi44NDUzNjQgMTQ3LjM5MzE5Niw3LjQ4MDcyNCAxNDcuMzkzMTk2LDEzLjE5ODM2NCBMMTQ3LjM5MzE5NiwxMTQuODk5MDQ0IEMxNDcuMzkzMTk2LDEyMC42MTc4NDQgMTQyLjc1NzgzNiwxMjUuMjUzMjA0IDEzNy4wMzkwMzYsMTI1LjI1MzIwNCIgaWQ9IkZpbGwtNCIgZmlsbD0iI0IzOEYwMCI+PC9wYXRoPgogICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0xMzkuMDI4Nzg0LDEyMi40MDg2NTIgTDY0LjI1MTcwNCwxMjIuNDA4NjUyIEw2NC4yNTE3MDQsMC4wMDA4MTIgTDEzOS4wMjg3ODQsMC4wMDA4MTIgQzE0NC43NDc1ODQsMC4wMDA4MTIgMTQ5LjM4Mjk0NCw0LjYzNjE3MiAxNDkuMzgyOTQ0LDEwLjM1MzgxMiBMMTQ5LjM4Mjk0NCwxMTIuMDU0NDkyIEMxNDkuMzgyOTQ0LDExNy43NzMyOTIgMTQ0Ljc0NzU4NCwxMjIuNDA4NjUyIDEzOS4wMjg3ODQsMTIyLjQwODY1MiIgaWQ9IkZpbGwtNiIgZmlsbD0iI0ZGQ0QwMCI+PC9wYXRoPgogICAgICAgICAgICAgICAgICAgIDxtYXNrIGlkPSJtYXNrLTQiIGZpbGw9IndoaXRlIj4KICAgICAgICAgICAgICAgICAgICAgICAgPHVzZSB4bGluazpocmVmPSIjcGF0aC0zIj48L3VzZT4KICAgICAgICAgICAgICAgICAgICA8L21hc2s+CiAgICAgICAgICAgICAgICAgICAgPGcgaWQ9IkNsaXAtOSI+PC9nPgogICAgICAgICAgICAgICAgICAgIDxwb2x5Z29uIGlkPSJGaWxsLTgiIGZpbGw9IiMwMDJFNkQiIG1hc2s9InVybCgjbWFzay00KSIgcG9pbnRzPSI1NC4yNzA2IDEyMi40MDkgNjQuNDU2NTYgMTIyLjQwOSA2NC40NTY1NiAwLjAwMTE2IDU0LjI3MDYgMC4wMDExNiI+PC9wb2x5Z29uPgogICAgICAgICAgICAgICAgICAgIDxwb2x5Z29uIGlkPSJGaWxsLTEwIiBmaWxsPSIjRjNGMkYyIiBtYXNrPSJ1cmwoI21hc2stNCkiIHBvaW50cz0iODUuNTM0OTIgNDIuMTM0NjggMTI4LjA5OTk2IDQyLjEzNDY4IDEyOC4wOTk5NiAyMC40MTk0OCA4NS41MzQ5MiAyMC40MTk0OCI+PC9wb2x5Z29uPgogICAgICAgICAgICAgICAgICAgIDxwb2x5Z29uIGlkPSJGaWxsLTExIiBmaWxsPSIjRjNGMkYyIiBtYXNrPSJ1cmwoI21hc2stNCkiIHBvaW50cz0iMTA2LjgxNzQ0IDEwNy4xMDI4IDEyOC4wOTk5NiAxMDcuMTAyOCAxMjguMDk5OTYgOTkuMTcxODggMTA2LjgxNzQ0IDk5LjE3MTg4Ij48L3BvbHlnb24+CiAgICAgICAgICAgICAgICAgICAgPHBvbHlnb24gaWQ9IkZpbGwtMTIiIGZpbGw9IiMzMzMzMzMiIG1hc2s9InVybCgjbWFzay00KSIgcG9pbnRzPSI0NS44MzE3MTYgNi4yMDcwNDQgNDcuMTAzMDc2IDYuMjA3MDQ0IDQ1LjI1MTcxNiAtMC4wMDAxMTYgNDMuNDAxNTE2IDYuMjA3MDQ0IDQ0LjY3MTcxNiA2LjIwNzA0NCA0NC42NzE3MTYgMTE4LjY1Mzk2NCA0My40MDE1MTYgMTE4LjY1Mzk2NCA0NS4yNTE3MTYgMTI0Ljg1OTk2NCA0Ny4xMDMwNzYgMTE4LjY1Mzk2NCA0NS44MzE3MTYgMTE4LjY1Mzk2NCI+PC9wb2x5Z29uPgogICAgICAgICAgICAgICAgICAgIDxwb2x5Z29uIGlkPSJGaWxsLTEzIiBmaWxsPSIjMzMzMzMzIiBtYXNrPSJ1cmwoI21hc2stNCkiIHBvaW50cz0iMTQ0Ljg0ODYyIDEzNC40MzU3NjQgMTQ0Ljg0ODYyIDEzNS43MDU5NjQgMTUxLjA1NTc4IDEzMy44NTU3NjQgMTQ0Ljg0ODYyIDEzMi4wMDQ0MDQgMTQ0Ljg0ODYyIDEzMy4yNzU3NjQgNjEuNDAxNyAxMzMuMjc1NzY0IDYxLjQwMTcgMTMyLjAwNDQwNCA1NS4xOTU3IDEzMy44NTU3NjQgNjEuNDAxNyAxMzUuNzA1OTY0IDYxLjQwMTcgMTM0LjQzNTc2NCI+PC9wb2x5Z29uPgogICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICA8L2c+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4=",
                                          alt: "XS",
                                          style: {
                                            height: "40px",
                                            width: "160px",
                                            "box-sizing": "border-box",
                                          },
                                        })
                                      ),
                                      m(
                                        "div",
                                        {
                                          style: {
                                            "box-sizing": "border-box",
                                            margin: "0px",
                                            display: "flex",
                                            "flex-direction": "column",
                                            "align-items": "flex-start",
                                            "text-align": "center",
                                            "justify-content": "center",
                                            "padding-left": "16px",
                                          },
                                        },
                                        [
                                          m(
                                            "h3",
                                            {
                                              slot: "title",
                                              style: {
                                                "font-size": "16px",
                                                "line-height": "24px",
                                                "box-sizing": "border-box",
                                                margin: "0px",
                                                padding: "0px",
                                                "font-weight": "400",
                                                color: "rgb(51, 51, 51)",
                                                "text-align": "center",
                                                "white-space": "nowrap",
                                              },
                                            },
                                            "Hasta 2kg"
                                          ),
                                          m(
                                            "span",
                                            {
                                              slot: "description",
                                              style: {
                                                "font-size": "10px",
                                                "line-height": "17.6px",
                                                "box-sizing": "border-box",
                                                margin: "0px",
                                                padding: "0px",
                                                "font-weight": "400",
                                                color: "rgb(51, 51, 51)",
                                                "text-align": "center",
                                              },
                                            },
                                            "Dimensión: 30x20x20"
                                          ),
                                        ]
                                      ),
                                    ]
                                  )
                                ),
                                m(
                                  "correos-ui-card-size",
                                  {
                                    slot: "cards",
                                    variant: "small-card-mobile",
                                    style: {
                                      display: "flex",
                                      "box-sizing": "border-box",
                                      visibility: "visible",
                                      height: "76px",
                                      width: "100%",
                                      "justify-content": "center",
                                      border: "1px solid rgb(203, 203, 203)",
                                      "border-radius": "8px",
                                      "background-color": "rgb(255, 255, 255)",
                                      "box-shadow":
                                        "rgba(0, 0, 0, 0.1) 0px 10px 20px 0px",
                                      cursor: "pointer",
                                      "--_ui-card-size-bg-color": "1",
                                      "--_ui-card-size-border-radius": "1",
                                      "--_ui-card-size-box-shadow":
                                        "0 10px 20px 0 rgba(0, 0, 0, 0.1)",
                                      "--_ui-card-size-color-text": "1",
                                      "--_ui-card-size-border-active":
                                        "2px solid 1",
                                      "--_ui-card-size-box-shadow-active":
                                        "0 5px 10px 0 rgba(0, 0, 0, 0.1)",
                                      "--_ui-card-size-border-desktop":
                                        "1px solid 1",
                                    },
                                  },
                                  m(
                                    "button",
                                    {
                                      style: {
                                        padding: "16px",
                                        "box-sizing": "border-box",
                                        border: "0px none rgb(51, 51, 51)",
                                        cursor: "pointer",
                                        margin: "0px",
                                        overflow: "visible",
                                        background:
                                          "rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box",
                                        color: "rgb(51, 51, 51)",
                                        "-webkit-font-smoothing": "antialiased",
                                        appearance: "none",
                                        display: "flex",
                                        "flex-direction": "row",
                                        "align-items": "center",
                                        "justify-content": "flex-start",
                                        "text-decoration":
                                          "none solid rgb(51, 51, 51)",
                                        width: "100%",
                                        height: "74px",
                                      },
                                    },
                                    [
                                      m(
                                        "figure",
                                        {
                                          style: {
                                            "box-sizing": "border-box",
                                            margin: "0px",
                                            display: "flex",
                                            "align-items": "center",
                                            "text-align": "center",
                                            "justify-content": "center",
                                            "max-width": "60px",
                                            "max-height": "60px",
                                          },
                                        },
                                        m("img", {
                                          slot: "header-img",
                                          src: "data:image/svg+xml;base64, PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMTkzcHgiIGhlaWdodD0iMTM2cHgiIHZpZXdCb3g9IjAgMCAxOTMgMTM2IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgogICAgPHRpdGxlPmF0b21zL2ltZy9pbHVzdHJhY2lvbmVzL3NpemUvZW52aW9fbWVkaWFubzwvdGl0bGU+CiAgICA8ZGVmcz4KICAgICAgICA8cG9seWdvbiBpZD0icGF0aC0xIiBwb2ludHM9IjAgMC4wMjY3ODI0ODY0IDE5Mi4xOTM0NCAwLjAyNjc4MjQ4NjQgMTkyLjE5MzQ0IDEzNC41NiAwIDEzNC41NiI+PC9wb2x5Z29uPgogICAgPC9kZWZzPgogICAgPGcgaWQ9IlVJLUtJVCIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGcgaWQ9IkNvcnJlb3Nfd2ViX1VJa2l0XzU0X0lsbHVzdHJhdGlvbnMiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC00MTkuMDAwMDAwLCAtNTAwMS4wMDAwMDApIj4KICAgICAgICAgICAgPGcgaWQ9Ikdyb3VwIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0MDAuMDAwMDAwLCA0OTUyLjAwMDAwMCkiPgogICAgICAgICAgICAgICAgPGcgaWQ9Ikdyb3VwLTI2IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxOS43MjAwMDAsIDQ4LjcyMDAwMCkiPgogICAgICAgICAgICAgICAgICAgIDxnIGlkPSJHcm91cC0zIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwLjAwMDAwMCwgMS4xMzMzMjApIj4KICAgICAgICAgICAgICAgICAgICAgICAgPG1hc2sgaWQ9Im1hc2stMiIgZmlsbD0id2hpdGUiPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVzZSB4bGluazpocmVmPSIjcGF0aC0xIj48L3VzZT4KICAgICAgICAgICAgICAgICAgICAgICAgPC9tYXNrPgogICAgICAgICAgICAgICAgICAgICAgICA8ZyBpZD0iQ2xpcC0yIj48L2c+CiAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0xOS45NTc0NTIsMzAuODYxNTY4IEMtMTMuMzE0ODI4LDQ2LjY5OTA0OCAtMTEuNzI3OTQ4LDEwNy4yODQ2ODggNzcuMjEwNDEyLDEzMS4zNjg2MDggQzE2Ni4xNDk5MzIsMTU1LjQ1MDIwOCAyMTkuODIzMTMyLDM2LjIxMzgwOCAxNzcuNDI5NzcyLDEwLjEwNjg0OCBDMTM1LjAzNjQxMiwtMTUuOTk3NzkyIDUzLjIyOTczMiwxNS4wMjQwODggMTkuOTU3NDUyLDMwLjg2MTU2OCIgaWQ9IkZpbGwtMSIgZmlsbD0iI0YzRjJGMiIgbWFzaz0idXJsKCNtYXNrLTIpIj48L3BhdGg+CiAgICAgICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0xNTkuMDEwMTMyLDg5LjE2MjM1NiBMMTYwLjQ2MTI5Miw4Ny43MTIzNTYgQzE2My45NzcyNTIsODQuMTk2Mzk2IDE2NS45NTI3MzIsNzkuNDI2NDc2IDE2NS45NTI3MzIsNzQuNDUzNTU2IEwxNjUuOTUyNzMyLDM3Ljk1MDY3NiBDMTY1Ljk1MjczMiwzNi4xMjk0NzYgMTY0LjQ3NjA1MiwzNC42NTM5NTYgMTYyLjY1NjAxMiwzNC42NTM5NTYgQzE1OC45NDI4NTIsMzQuNjUzOTU2IDE1NS45MzI2NTIsMzcuNjYyOTk2IDE1NS45MzI2NTIsNDEuMzc2MTU2IEMxNTUuOTMyNjUyLDQzLjY2NzE1NiAxNTQuNzcxNDkyLDQ1LjgwMjcxNiAxNTIuODQwMDkyLDQ3LjAzNjk1NiBDMTUwLjAwNzM3Miw0OC44NDY1NTYgMTQ0LjgyOTEzMiw1MS4wMDc2MzYgMTM1Ljc1OTA5Miw1MS43NTgxNTYgQzEzMS41MzU1MzIsNTIuMTA3MzE2IDEyNy4zNjUzMzIsNTAuNTg4ODc2IDEyNC4zNjkwNTIsNDcuNTkyNTk2IEwxMTEuNzkyMzMyLDM1LjAxNTg3NiBDMTA5LjU2Mzk3MiwzMi43ODYzNTYgMTA2LjI0OTg1MiwzMi4wNDYyNzYgMTAzLjI4NjA1MiwzMy4xMjE1OTYgQzk3LjMyOTQ1MiwzNS4yODg0NzYgODYuNTI4NjkyLDM5LjUyMTMxNiA3NC4wOTU4MTIsNDUuODIxMjc2IEM1NS4xNTMwMTIsNTUuNDE3OTU2IDM4LjM5MjE3Miw1OC43ODg5MTYgMjkuMzg5NDEyLDYwLjYxMTI3NiBDMjAuMzg2NjUyLDYyLjQzMTMxNiAxNi4xOTIwOTIsNjcuOTUwNTk2IDE2LjE5MjA5Miw3Ni4xMDg4NzYgQzE2LjE5MjA5Miw4OC40OTUzNTYgNDguMDgwNDkyLDk2LjU4ODY3NiA0OC4wODA0OTIsOTYuNTg4Njc2IEwxNTYuNjkwMTMyLDk2LjU4ODY3NiBMMTU5LjAxMDEzMiw4OS4xNjIzNTYgWiIgaWQ9IkZpbGwtNCIgZmlsbD0iI0ZGQ0QwMCI+PC9wYXRoPgogICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0xMzUuOTYwMjM2LDk3LjA4MDYzMiBDMTM1LjU0MTQ3Niw5Ny4wODA2MzIgMTM1LjE0MTI3Niw5Ni44MzgxOTIgMTM0Ljk2MTQ3Niw5Ni40Mjk4NzIgQzEzMy4yNDY5OTYsOTIuNTQwMzkyIDEzMi4zNzgxNTYsODguNDA0OTkyIDEzMi4zNzgxNTYsODQuMTQ0MzEyIEMxMzIuMzc4MTU2LDY3LjMyODk1MiAxNDYuMDU4MDM2LDUzLjY0OTA3MiAxNjIuODczMzk2LDUzLjY0OTA3MiBDMTYzLjkzMDE1Niw1My42NDkwNzIgMTY1LjAwNDMxNiw1My43MDM1OTIgMTY2LjA2NTcxNiw1My44MTQ5NTIgQzE2Ni42NjU0MzYsNTMuODc3NTkyIDE2Ny4xMDA0MzYsNTQuNDE0NjcyIDE2Ny4wMzc3OTYsNTUuMDEyMDcyIEMxNjYuOTc1MTU2LDU1LjYxMTc5MiAxNjYuNDM4MDc2LDU2LjA0OTExMiAxNjUuODM5NTE2LDU1Ljk4NDE1MiBDMTY0Ljg1MzUxNiw1NS44ODA5MTIgMTYzLjg1NDc1Niw1NS44Mjg3MTIgMTYyLjg3MzM5Niw1NS44Mjg3MTIgQzE0Ny4yNjA5NTYsNTUuODI4NzEyIDEzNC41NTg5NTYsNjguNTMxODcyIDEzNC41NTg5NTYsODQuMTQ0MzEyIEMxMzQuNTU4OTU2LDg4LjEwMTA3MiAxMzUuMzY2MzE2LDkxLjkzODM1MiAxMzYuOTU3ODM2LDk1LjU1MDU5MiBDMTM3LjIwMDI3Niw5Ni4xMDA0MzIgMTM2Ljk1MDg3Niw5Ni43NDUzOTIgMTM2LjM5OTg3Niw5Ni45ODc4MzIgQzEzNi4yNTYwMzYsOTcuMDUxNjMyIDEzNi4xMDc1NTYsOTcuMDgwNjMyIDEzNS45NjAyMzYsOTcuMDgwNjMyIiBpZD0iRmlsbC02IiBmaWxsPSIjMDAyRTZEIj48L3BhdGg+CiAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTEyNy4wMzY0NzIsOTIuMTE4OTY0IEMxMjYuNzMxMzkyLDkyLjExODk2NCAxMjYuNDI3NDcyLDkxLjk5MTM2NCAxMjYuMjExNzEyLDkxLjc0MTk2NCBMMTIxLjAyNDE5Miw4NS43NTUyMDQgQzExOC41NjM4MzIsODQuNTk2MzY0IDk0LjM1MTE1Miw3My4zODQ5NjQgNzkuMDQwMzEyLDczLjM4NDk2NCBDNjQuMDk4MzUyLDczLjM4NDk2NCA0My42MzU5NTIsNzMuMzg0OTY0IDM1LjQ0NjM1Miw1OS44MjU3MjQgQzM1LjEzNDMxMiw1OS4zMDk1MjQgMzUuMzAwMTkyLDU4LjY0MDIwNCAzNS44MTYzOTIsNTguMzI3MDA0IEMzNi4zMzE0MzIsNTguMDE2MTI0IDM3LjAwMTkxMiw1OC4xODIwMDQgMzcuMzEzOTUyLDU4LjY5ODIwNCBDNDQuMjg5MDMyLDcwLjI0NzE2NCA2MS4wMzEzMTIsNzEuMjAzMDA0IDc5LjA0MDMxMiw3MS4yMDMwMDQgQzk1LjYwMjc5Miw3MS4yMDMwMDQgMTIxLjA5Mzc5Miw4My4zNjY3NjQgMTIyLjE3MTQzMiw4My44ODQxMjQgTDEyMi4zNzU1OTIsODMuOTgxNTY0IEwxMjcuODYwMDcyLDkwLjMxNDAwNCBDMTI4LjI1NTYzMiw5MC43Njk4ODQgMTI4LjIwNTc1Miw5MS40NTg5MjQgMTI3Ljc0OTg3Miw5MS44NTMzMjQgQzEyNy41NDMzOTIsOTIuMDMxOTY0IDEyNy4yODkzNTIsOTIuMTE4OTY0IDEyNy4wMzY0NzIsOTIuMTE4OTY0IiBpZD0iRmlsbC04IiBmaWxsPSIjMDAyRTZEIj48L3BhdGg+CiAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTk4LjkxNTA1Niw0OC4xMzY0MDQgTDk4LjkxNTA1Niw0OC4xMzY0MDQgQzk3Ljc3OTQxNiw0OC44MDQ1NjQgOTYuMzE4OTc2LDQ4LjQyNjQwNCA5NS42NDk2NTYsNDcuMjkxOTI0IEw5MC44NTQyMTYsMzkuMTUxMDQ0IEM5MC4xODYwNTYsMzguMDE1NDA0IDkwLjU2NDIxNiwzNi41NTQ5NjQgOTEuNjk4Njk2LDM1Ljg4NTY0NCBDOTIuODM0MzM2LDM1LjIxNzQ4NCA5NC4yOTU5MzYsMzUuNTk0NDg0IDk0Ljk2NDA5NiwzNi43MzAxMjQgTDk5Ljc1OTUzNiw0NC44NzIxNjQgQzEwMC40Mjc2OTYsNDYuMDA1NDg0IDEwMC4wNTA2OTYsNDcuNDY4MjQ0IDk4LjkxNTA1Niw0OC4xMzY0MDQiIGlkPSJGaWxsLTEwIiBmaWxsPSIjMDAyRTZEIj48L3BhdGg+CiAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTg5LjMxMzI3Miw1Mi4zMTMxIEw4OS4zMTMyNzIsNTIuMzEzMSBDODguMTc3NjMyLDUyLjk4MTI2IDg2LjcxNjAzMiw1Mi42MDMxIDg2LjA0Nzg3Miw1MS40Njc0NiBMODEuMjUyNDMyLDQzLjMyNzc0IEM4MC41ODQyNzIsNDIuMTkyMSA4MC45NjI0MzIsNDAuNzMxNjYgODIuMDk2OTEyLDQwLjA2MjM0IEM4My4yMzEzOTIsMzkuMzkzMDIgODQuNjk0MTUyLDM5Ljc3MTE4IDg1LjM2MjMxMiw0MC45MDY4MiBMOTAuMTU3NzUyLDQ5LjA0ODg2IEM5MC44MjU5MTIsNTAuMTgyMTggOTAuNDQ3NzUyLDUxLjY0NDk0IDg5LjMxMzI3Miw1Mi4zMTMxIiBpZD0iRmlsbC0xMiIgZmlsbD0iIzAwMkU2RCI+PC9wYXRoPgogICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik03OS4xODI1MjgsNTYuODM1MjQ0IEw3OS4xODI1MjgsNTYuODM1MjQ0IEM3OC4wNDY4ODgsNTcuNTAzNDA0IDc2LjU4NTI4OCw1Ny4xMjY0MDQgNzUuOTE3MTI4LDU1Ljk5MDc2NCBMNzEuMTIxNjg4LDQ3Ljg0OTg4NCBDNzAuNDUzNTI4LDQ2LjcxNTQwNCA3MC44MzE2ODgsNDUuMjUzODA0IDcxLjk2NjE2OCw0NC41ODQ0ODQgQzczLjEwMDY0OCw0My45MTYzMjQgNzQuNTYzNDA4LDQ0LjI5NDQ4NCA3NS4yMzE1NjgsNDUuNDI4OTY0IEw4MC4wMjcwMDgsNTMuNTcxMDA0IEM4MC42OTUxNjgsNTQuNzA1NDg0IDgwLjMxNzAwOCw1Ni4xNjcwODQgNzkuMTgyNTI4LDU2LjgzNTI0NCIgaWQ9IkZpbGwtMTQiIGZpbGw9IiMwMDJFNkQiPjwvcGF0aD4KICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNNjkuNDI5MDE2LDYxLjkwNTcyIEw2OS40MjkwMTYsNjEuOTA1NzIgQzY4LjI5NDUzNiw2Mi41NzM4OCA2Ni44MzI5MzYsNjIuMTk1NzIgNjYuMTY0Nzc2LDYxLjA2MTI0IEw2MS4zNjkzMzYsNTIuOTIwMzYgQzYwLjcwMDAxNiw1MS43ODQ3MiA2MS4wNzgxNzYsNTAuMzI0MjggNjIuMjEyNjU2LDQ5LjY1NDk2IEM2My4zNDgyOTYsNDguOTg2OCA2NC44MDk4OTYsNDkuMzYzOCA2NS40NzgwNTYsNTAuNDk5NDQgTDcwLjI3MzQ5Niw1OC42NDE0OCBDNzAuOTQyODE2LDU5Ljc3NTk2IDcwLjU2NDY1Niw2MS4yMzc1NiA2OS40MjkwMTYsNjEuOTA1NzIiIGlkPSJGaWxsLTE2IiBmaWxsPSIjMDAyRTZEIj48L3BhdGg+CiAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTE2LjE5MTk3Niw3Ni45MTc3NDQgQzE2LjE5MTk3Niw3Ni45MTc3NDQgMTQuNjY4ODk2LDk3Ljk4MzM0NCA3MS45NTMxNzYsOTcuOTgzMzQ0IEMxMjkuMjM4NjE2LDk3Ljk4MzM0NCAxNjQuMTI3OTM2LDg1LjU1Mjc4NCAxNjQuMTI3OTM2LDg1LjU1Mjc4NCBMMTY0LjEyNzkzNiw4My4yNzY4NjQgTDUwLjQxNTQ1Niw4My4yNzY4NjQgQzIxLjMxNTY5Niw4My4yNzY4NjQgMTYuMTkxOTc2LDc2LjkxNzc0NCAxNi4xOTE5NzYsNzYuOTE3NzQ0IiBpZD0iRmlsbC0xOCIgZmlsbD0iI0IzOEYwMCI+PC9wYXRoPgogICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0xNi4xOTE5NzYsNzYuOTE3NzQ0IEMxNi4xOTE5NzYsNzYuOTE3NzQ0IDE0LjY2ODg5NiwxMDAuMjU5MjY0IDcxLjk1MzE3NiwxMDAuMjU5MjY0IEwxNjUuOTgyNzc2LDEwMC4yNTkyNjQgTDE2NC4xMjc5MzYsODUuNTUyNzg0IEw1MC40MTU0NTYsODUuNTUyNzg0IEMyMS4zMTU2OTYsODUuNTUyNzg0IDE2LjE5MTk3Niw3Ni45MTc3NDQgMTYuMTkxOTc2LDc2LjkxNzc0NCIgaWQ9IkZpbGwtMjAiIGZpbGw9IiMwMDJFNkQiPjwvcGF0aD4KICAgICAgICAgICAgICAgICAgICA8cG9seWdvbiBpZD0iRmlsbC0yMiIgZmlsbD0iIzMzMzMzMyIgcG9pbnRzPSI4Ljc3NDI0IDM4LjEwODY2OCAxMC4wNDU2IDM4LjEwODY2OCA4LjE5NDI0IDMxLjkwMTUwOCA2LjM0NDA0IDM4LjEwODY2OCA3LjYxNDI0IDM4LjEwODY2OCA3LjYxNDI0IDk0Ljk0NTE4OCA2LjM0NDA0IDk0Ljk0NTE4OCA4LjE5NDI0IDEwMS4xNTIzNDggMTAuMDQ1NiA5NC45NDUxODggOC43NzQyNCA5NC45NDUxODgiPjwvcG9seWdvbj4KICAgICAgICAgICAgICAgICAgICA8cG9seWdvbiBpZD0iRmlsbC0yNCIgZmlsbD0iIzMzMzMzMyIgcG9pbnRzPSIxNjIuODQ5MjY4IDExMC43Mjc2ODQgMTYyLjg0OTI2OCAxMTEuOTk3ODg0IDE2OS4wNTY0MjggMTEwLjE0NzY4NCAxNjIuODQ5MjY4IDEwOC4yOTYzMjQgMTYyLjg0OTI2OCAxMDkuNTY3Njg0IDI0LjM0NTI2OCAxMDkuNTY3Njg0IDI0LjM0NTI2OCAxMDguMjk2MzI0IDE4LjEzODEwOCAxMTAuMTQ3Njg0IDI0LjM0NTI2OCAxMTEuOTk3ODg0IDI0LjM0NTI2OCAxMTAuNzI3Njg0Ij48L3BvbHlnb24+CiAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgIDwvZz4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg==",
                                          alt: "S",
                                          style: {
                                            height: "40px",
                                            width: "160px",
                                            "box-sizing": "border-box",
                                          },
                                        })
                                      ),
                                      m(
                                        "div",
                                        {
                                          style: {
                                            "box-sizing": "border-box",
                                            margin: "0px",
                                            display: "flex",
                                            "flex-direction": "column",
                                            "align-items": "flex-start",
                                            "text-align": "center",
                                            "justify-content": "center",
                                            "padding-left": "16px",
                                          },
                                        },
                                        [
                                          m(
                                            "h3",
                                            {
                                              slot: "title",
                                              style: {
                                                "font-size": "16px",
                                                "line-height": "24px",
                                                "box-sizing": "border-box",
                                                margin: "0px",
                                                padding: "0px",
                                                "font-weight": "400",
                                                color: "rgb(51, 51, 51)",
                                                "text-align": "center",
                                                "white-space": "nowrap",
                                              },
                                            },
                                            "Hasta 5kg"
                                          ),
                                          m(
                                            "span",
                                            {
                                              slot: "description",
                                              style: {
                                                "font-size": "10px",
                                                "line-height": "17.6px",
                                                "box-sizing": "border-box",
                                                margin: "0px",
                                                padding: "0px",
                                                "font-weight": "400",
                                                color: "rgb(51, 51, 51)",
                                                "text-align": "center",
                                              },
                                            },
                                            "Dimensión: 35x35x24"
                                          ),
                                        ]
                                      ),
                                    ]
                                  )
                                ),
                                m(
                                  "correos-ui-card-size",
                                  {
                                    slot: "cards",
                                    variant: "small-card-mobile",
                                    style: {
                                      display: "flex",
                                      "box-sizing": "border-box",
                                      visibility: "visible",
                                      height: "76px",
                                      width: "100%",
                                      "justify-content": "center",
                                      border: "1px solid rgb(203, 203, 203)",
                                      "border-radius": "8px",
                                      "background-color": "rgb(255, 255, 255)",
                                      "box-shadow":
                                        "rgba(0, 0, 0, 0.1) 0px 10px 20px 0px",
                                      cursor: "pointer",
                                      "--_ui-card-size-bg-color": "1",
                                      "--_ui-card-size-border-radius": "1",
                                      "--_ui-card-size-box-shadow":
                                        "0 10px 20px 0 rgba(0, 0, 0, 0.1)",
                                      "--_ui-card-size-color-text": "1",
                                      "--_ui-card-size-border-active":
                                        "2px solid 1",
                                      "--_ui-card-size-box-shadow-active":
                                        "0 5px 10px 0 rgba(0, 0, 0, 0.1)",
                                      "--_ui-card-size-border-desktop":
                                        "1px solid 1",
                                    },
                                  },
                                  m(
                                    "button",
                                    {
                                      style: {
                                        padding: "16px",
                                        "box-sizing": "border-box",
                                        border: "0px none rgb(51, 51, 51)",
                                        cursor: "pointer",
                                        margin: "0px",
                                        overflow: "visible",
                                        background:
                                          "rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box",
                                        color: "rgb(51, 51, 51)",
                                        "-webkit-font-smoothing": "antialiased",
                                        appearance: "none",
                                        display: "flex",
                                        "flex-direction": "row",
                                        "align-items": "center",
                                        "justify-content": "flex-start",
                                        "text-decoration":
                                          "none solid rgb(51, 51, 51)",
                                        width: "100%",
                                        height: "74px",
                                      },
                                    },
                                    [
                                      m(
                                        "figure",
                                        {
                                          style: {
                                            "box-sizing": "border-box",
                                            margin: "0px",
                                            display: "flex",
                                            "align-items": "center",
                                            "text-align": "center",
                                            "justify-content": "center",
                                            "max-width": "60px",
                                            "max-height": "60px",
                                          },
                                        },
                                        m("img", {
                                          slot: "header-img",
                                          src: "data:image/svg+xml;base64, PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMTkzcHgiIGhlaWdodD0iMTYycHgiIHZpZXdCb3g9IjAgMCAxOTMgMTYyIiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgogICAgPHRpdGxlPmF0b21zL2ltZy9pbHVzdHJhY2lvbmVzL3NpemUvZW52aW9fZ3JhbmRlPC90aXRsZT4KICAgIDxkZWZzPgogICAgICAgIDxwb2x5Z29uIGlkPSJwYXRoLTEiIHBvaW50cz0iMCAwLjAyNjc4MjQ4NjQgMTkyLjE5Mjg2MiAwLjAyNjc4MjQ4NjQgMTkyLjE5Mjg2MiAxMzQuNTYgMCAxMzQuNTYiPjwvcG9seWdvbj4KICAgIDwvZGVmcz4KICAgIDxnIGlkPSJVSS1LSVQiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIGlkPSJDb3JyZW9zX3dlYl9VSWtpdF81NF9JbGx1c3RyYXRpb25zIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtNzU1LjAwMDAwMCwgLTQ5ODcuMDAwMDAwKSI+CiAgICAgICAgICAgIDxnIGlkPSJHcm91cCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNzM2LjAwMDAwMCwgNDk1Mi4wMDAwMDApIj4KICAgICAgICAgICAgICAgIDxnIGlkPSJHcm91cC0yNCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTkuNzIwMDAwLCAzNS45NjAwMDApIj4KICAgICAgICAgICAgICAgICAgICA8ZyBpZD0iR3JvdXAtMyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMC4wMDAwMDAsIDI2LjA4NjA4MCkiPgogICAgICAgICAgICAgICAgICAgICAgICA8bWFzayBpZD0ibWFzay0yIiBmaWxsPSJ3aGl0ZSI+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dXNlIHhsaW5rOmhyZWY9IiNwYXRoLTEiPjwvdXNlPgogICAgICAgICAgICAgICAgICAgICAgICA8L21hc2s+CiAgICAgICAgICAgICAgICAgICAgICAgIDxnIGlkPSJDbGlwLTIiPjwvZz4KICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTE5Ljk1NzY4NCwzMC44NjE1NjggQy0xMy4zMTQ1OTYsNDYuNjk5MDQ4IC0xMS43Mjc3MTYsMTA3LjI4NDY4OCA3Ny4yMTA2NDQsMTMxLjM2ODYwOCBDMTY2LjE1MDE2NCwxNTUuNDUwMjA4IDIxOS44MjIyMDQsMzYuMjEzODA4IDE3Ny40Mjg4NDQsMTAuMTA2ODQ4IEMxMzUuMDM2NjQ0LC0xNS45OTc3OTIgNTMuMjI4ODA0LDE1LjAyNDA4OCAxOS45NTc2ODQsMzAuODYxNTY4IiBpZD0iRmlsbC0xIiBmaWxsPSIjRjNGMkYyIiBtYXNrPSJ1cmwoI21hc2stMikiPjwvcGF0aD4KICAgICAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTE3Mi4xMjYxMzYsNjQuOTAwMDI4IEMxNzIuMTI2MTM2LDYwLjE2MTQyOCAxNzEuNjA1Mjk2LDU1LjU0Njk0OCAxNzAuNjQxMzM2LDUxLjA5ODM0OCBDMTY0LjMxMjM3NiwyMS44ODcyMjggMTM4LjMzMTg1NiwwLjAwMDM0OCAxMDcuMjI2NDU2LDAuMDAwMzQ4IEM3MS4zODM2MTYsMC4wMDAzNDggNDIuMzI3OTM2LDI5LjA1NzE4OCA0Mi4zMjc5MzYsNjQuOTAwMDI4IEwxMDkuMTUyMDU2LDY0Ljg2NDA2OCBMMTEwLjAwMTE3NiwxMTkuOTE1MzQ4IiBpZD0iRmlsbC00IiBmaWxsPSIjMDAyRTZEIj48L3BhdGg+CiAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTM1LjU1NzEzMiwxMDQuMTI5MzcyIEwzNy44NDAwMTIsMTI2LjQ5NzY1MiBMMTEwLjcxNzAxMiwxMjYuNDk3NjUyIEMxNDQuMTc0ODkyLDEyNi40OTc2NTIgMTcyLjEyNjI1MiwxMDYuMzIyOTMyIDE3Mi4xMjYyNTIsNjEuODE3MjEyIEMxNzIuMTI2MjUyLDU3LjkwNDUzMiAxNzEuNjk1ODkyLDU0LjA5MzkzMiAxNzAuOTAwMTMyLDUwLjQyMDIxMiBDMTY1LjY3MzE3MiwyNi4yOTgwMTIgMTM5LjIyNjMzMiwxMC4wNjI2NTIgMTEwLjc3MjY5MiwxMC4wNjI2NTIgQzgxLjE3Mjk3MiwxMC4wNjI2NTIgNTMuOTU3MDUyLDMyLjIxODY1MiA1My45NTcwNTIsNjEuODE3MjEyIEwxMDkuMTQwNTcyLDYxLjc4NzA1MiIgaWQ9IkZpbGwtNiIgZmlsbD0iI0ZGQ0QwMCI+PC9wYXRoPgogICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0xMzYuODExNzkyLDEwMi4yODI4ODQgQzEzNi44MTE3OTIsOTYuMzkwMDg0IDEzMi4wMzQ5MTIsOTEuNjEzMjA0IDEyNi4xNDIxMTIsOTEuNjEzMjA0IEMxMjAuMjQ5MzEyLDkxLjYxMzIwNCAxMTUuNDcyNDMyLDk2LjM5MDA4NCAxMTUuNDcyNDMyLDEwMi4yODI4ODQgQzExNS40NzI0MzIsMTA4LjE3NTY4NCAxMjAuMjQ5MzEyLDExMi45NTI1NjQgMTI2LjE0MjExMiwxMTIuOTUyNTY0IEMxMzIuMDM0OTEyLDExMi45NTI1NjQgMTM2LjgxMTc5MiwxMDguMTc1Njg0IDEzNi44MTE3OTIsMTAyLjI4Mjg4NCIgaWQ9IkZpbGwtOCIgZmlsbD0iIzAwMjQ1MyI+PC9wYXRoPgogICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0xMjAuOTI0MDg0LDY3Ljc4NTI5NiBDMTIzLjkzNDI4NCw1Ny44ODM1MzYgMTE2LjAwNDUyNCw1MC40MjEyNTYgMTA0LjY0MTE2NCw1MC40MjEyNTYgTDM1LjU1NzM2NCwxMDQuMTI5MjU2IEwzNS43NjYxNjQsMTA3LjA5ODg1NiBDODMuNzM0NDg0LDEwNy4wOTg4NTYgMTEwLjkyNjA0NCwxMDEuNzQ3Nzc2IDExNy45ODM0ODQsNzguNTM3MzM2IiBpZD0iRmlsbC0xMCIgZmlsbD0iI0MzOUM1RCI+PC9wYXRoPgogICAgICAgICAgICAgICAgICAgIDxwb2x5Z29uIGlkPSJGaWxsLTEyIiBmaWxsPSIjMDAyRTZEIiBwb2ludHM9IjQ4LjMxNTk3MiAxMjYuNDk3ODg0IDM3Ljg0MDAxMiAxMjYuNDk3ODg0IDM1Ljc2NzA5MiAxMDcuMDk4MDQ0IDQ4LjMxNTk3MiAxMDcuMDk4MDQ0Ij48L3BvbHlnb24+CiAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTExNS43MTI2NjgsNzcuOTAxMzA4IEMxMDguNjU2Mzg4LDEwMS4xMTI5MDggNzcuNTA1NzQ4LDEwNC4xMjg5MDggMzUuNTU2NjY4LDEwNC4xMjg5MDggTDQzLjY5MjkwOCw1MC40MjIwNjggTDEwNC42NDE2MjgsNTAuNDIyMDY4IEMxMTYuMDAzODI4LDUwLjQyMjA2OCAxMjEuNjYzNDY4LDU4LjE2NzM4OCAxMTguNjUzMjY4LDY4LjA2OTE0OCBMMTE1LjcxMjY2OCw3Ny45MDEzMDggWiIgaWQ9IkZpbGwtMTQiIGZpbGw9IiNDM0U0RUIiPjwvcGF0aD4KICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMTA0Ljk1NDgyOCw1MC40MjE2MDQgTDk0Ljg5NzYyOCw1MC40MjE2MDQgTDg1LjgwMzIyOCwxMDAuNDkzMDA0IEM5NS4wMTgyNjgsOTguNDQ3OTI0IDEwMi41Mzg1NDgsOTUuMzA4OTY0IDEwNy45Mzk1MDgsOTAuNTI3NDQ0IEwxMTQuNzM5NDI4LDUzLjA4ODQ0NCBDMTEyLjI3NzkwOCw1MS4zOTYwMDQgMTA4Ljk3NTM4OCw1MC40MjE2MDQgMTA0Ljk1NDgyOCw1MC40MjE2MDQiIGlkPSJGaWxsLTE2IiBmaWxsPSIjRjNGMkYyIj48L3BhdGg+CiAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTgwLjgzOTU4OCw1MC40MjE2MDQgTDcxLjMzNTcwOCwxMDIuNzQ5MjA0IEM3NC40NzIzNDgsMTAyLjQyNDQwNCA3Ny40NzkwNjgsMTAyLjAyNzY4NCA4MC4zNTEyMjgsMTAxLjU0NzQ0NCBMODkuNjM3MDI4LDUwLjQyMTYwNCBMODAuODM5NTg4LDUwLjQyMTYwNCBaIiBpZD0iRmlsbC0xOCIgZmlsbD0iI0YzRjJGMiI+PC9wYXRoPgogICAgICAgICAgICAgICAgICAgIDxwb2x5Z29uIGlkPSJGaWxsLTIwIiBmaWxsPSIjMzMzMzMzIiBwb2ludHM9IjI4LjMwMTQ0OCA5LjcxODQ4IDI5LjU3MTY0OCA5LjcxODQ4IDI3LjcyMTQ0OCAzLjUxMTMyIDI1Ljg3MTI0OCA5LjcxODQ4IDI3LjE0MTQ0OCA5LjcxODQ4IDI3LjE0MTQ0OCAxMTkuODk3NiAyNS44NzEyNDggMTE5Ljg5NzYgMjcuNzIxNDQ4IDEyNi4xMDQ3NiAyOS41NzE2NDggMTE5Ljg5NzYgMjguMzAxNDQ4IDExOS44OTc2Ij48L3BvbHlnb24+CiAgICAgICAgICAgICAgICAgICAgPHBvbHlnb24gaWQ9IkZpbGwtMjIiIGZpbGw9IiMzMzMzMzMiIHBvaW50cz0iMTY1LjkxOTQ0IDEzNS42ODA0NDQgMTY1LjkxOTQ0IDEzNi45NTA2NDQgMTcyLjEyNjYgMTM1LjEwMDQ0NCAxNjUuOTE5NDQgMTMzLjI0OTA4NCAxNjUuOTE5NDQgMTM0LjUyMDQ0NCA0My44NzEyIDEzNC41MjA0NDQgNDMuODcxMiAxMzMuMjQ5MDg0IDM3LjY2NTIgMTM1LjEwMDQ0NCA0My44NzEyIDEzNi45NTA2NDQgNDMuODcxMiAxMzUuNjgwNDQ0Ij48L3BvbHlnb24+CiAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgIDwvZz4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg==",
                                          alt: "M",
                                          style: {
                                            height: "40px",
                                            width: "160px",
                                            "box-sizing": "border-box",
                                          },
                                        })
                                      ),
                                      m(
                                        "div",
                                        {
                                          style: {
                                            "box-sizing": "border-box",
                                            margin: "0px",
                                            display: "flex",
                                            "flex-direction": "column",
                                            "align-items": "flex-start",
                                            "text-align": "center",
                                            "justify-content": "center",
                                            "padding-left": "16px",
                                          },
                                        },
                                        [
                                          m(
                                            "h3",
                                            {
                                              slot: "title",
                                              style: {
                                                "font-size": "16px",
                                                "line-height": "24px",
                                                "box-sizing": "border-box",
                                                margin: "0px",
                                                padding: "0px",
                                                "font-weight": "400",
                                                color: "rgb(51, 51, 51)",
                                                "text-align": "center",
                                                "white-space": "nowrap",
                                              },
                                            },
                                            "Hasta 10kg"
                                          ),
                                          m(
                                            "span",
                                            {
                                              slot: "description",
                                              style: {
                                                "font-size": "10px",
                                                "line-height": "17.6px",
                                                "box-sizing": "border-box",
                                                margin: "0px",
                                                padding: "0px",
                                                "font-weight": "400",
                                                color: "rgb(51, 51, 51)",
                                                "text-align": "center",
                                              },
                                            },
                                            "Dimensión: 40x40x37"
                                          ),
                                        ]
                                      ),
                                    ]
                                  )
                                ),
                                m(
                                  "correos-ui-card-size",
                                  {
                                    slot: "cards",
                                    variant: "small-card-mobile",
                                    style: {
                                      display: "flex",
                                      "box-sizing": "border-box",
                                      visibility: "visible",
                                      height: "76px",
                                      width: "100%",
                                      "justify-content": "center",
                                      border: "1px solid rgb(203, 203, 203)",
                                      "border-radius": "8px",
                                      "background-color": "rgb(255, 255, 255)",
                                      "box-shadow":
                                        "rgba(0, 0, 0, 0.1) 0px 10px 20px 0px",
                                      cursor: "pointer",
                                      "--_ui-card-size-bg-color": "1",
                                      "--_ui-card-size-border-radius": "1",
                                      "--_ui-card-size-box-shadow":
                                        "0 10px 20px 0 rgba(0, 0, 0, 0.1)",
                                      "--_ui-card-size-color-text": "1",
                                      "--_ui-card-size-border-active":
                                        "2px solid 1",
                                      "--_ui-card-size-box-shadow-active":
                                        "0 5px 10px 0 rgba(0, 0, 0, 0.1)",
                                      "--_ui-card-size-border-desktop":
                                        "1px solid 1",
                                    },
                                  },
                                  m(
                                    "button",
                                    {
                                      style: {
                                        padding: "16px",
                                        "box-sizing": "border-box",
                                        border: "0px none rgb(51, 51, 51)",
                                        cursor: "pointer",
                                        margin: "0px",
                                        overflow: "visible",
                                        background:
                                          "rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box",
                                        color: "rgb(51, 51, 51)",
                                        "-webkit-font-smoothing": "antialiased",
                                        appearance: "none",
                                        display: "flex",
                                        "flex-direction": "row",
                                        "align-items": "center",
                                        "justify-content": "flex-start",
                                        "text-decoration":
                                          "none solid rgb(51, 51, 51)",
                                        width: "100%",
                                        height: "74px",
                                      },
                                    },
                                    [
                                      m(
                                        "figure",
                                        {
                                          style: {
                                            "box-sizing": "border-box",
                                            margin: "0px",
                                            display: "flex",
                                            "align-items": "center",
                                            "text-align": "center",
                                            "justify-content": "center",
                                            "max-width": "60px",
                                            "max-height": "60px",
                                          },
                                        },
                                        m("img", {
                                          slot: "header-img",
                                          src: "data:image/svg+xml;base64, PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMTkzcHgiIGhlaWdodD0iMTY1cHgiIHZpZXdCb3g9IjAgMCAxOTMgMTY1IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgogICAgPHRpdGxlPmF0b21zL2ltZy9pbHVzdHJhY2lvbmVzL3NpemUvZW52aW9fZXh0cmFncmFuZGU8L3RpdGxlPgogICAgPGRlZnM+CiAgICAgICAgPHBvbHlnb24gaWQ9InBhdGgtMSIgcG9pbnRzPSIwIDAuMDI2NzgyNDg2NCAxOTIuMTkzNDQgMC4wMjY3ODI0ODY0IDE5Mi4xOTM0NCAxMzQuNTYgMCAxMzQuNTYiPjwvcG9seWdvbj4KICAgICAgICA8cG9seWdvbiBpZD0icGF0aC0zIiBwb2ludHM9IjAgMTYzLjk1MzI0IDE5Mi4xOTM0NCAxNjMuOTUzMjQgMTkyLjE5MzQ0IDAgMCAwIj48L3BvbHlnb24+CiAgICA8L2RlZnM+CiAgICA8ZyBpZD0iVUktS0lUIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8ZyBpZD0iQ29ycmVvc193ZWJfVUlraXRfNTRfSWxsdXN0cmF0aW9ucyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTEwOTEuMDAwMDAwLCAtNDk4NS4wMDAwMDApIj4KICAgICAgICAgICAgPGcgaWQ9Ikdyb3VwIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxMDcyLjAwMDAwMCwgNDk1Mi4wMDAwMDApIj4KICAgICAgICAgICAgICAgIDxnIGlkPSJHcm91cC0yMiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTkuNzIwMDAwLCAzMy42NDAwMDApIj4KICAgICAgICAgICAgICAgICAgICA8ZyBpZD0iR3JvdXAtMyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMC4wMDAwMDAsIDI5LjM5MzI0MCkiPgogICAgICAgICAgICAgICAgICAgICAgICA8bWFzayBpZD0ibWFzay0yIiBmaWxsPSJ3aGl0ZSI+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dXNlIHhsaW5rOmhyZWY9IiNwYXRoLTEiPjwvdXNlPgogICAgICAgICAgICAgICAgICAgICAgICA8L21hc2s+CiAgICAgICAgICAgICAgICAgICAgICAgIDxnIGlkPSJDbGlwLTIiPjwvZz4KICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTE5Ljk1NzU2OCwzMC44NjE1NjggQy0xMy4zMTQ3MTIsNDYuNjk5MDQ4IC0xMS43Mjc4MzIsMTA3LjI4NDY4OCA3Ny4yMTA1MjgsMTMxLjM2ODYwOCBDMTY2LjE1MDA0OCwxNTUuNDUwMjA4IDIxOS44MjMyNDgsMzYuMjEzODA4IDE3Ny40Mjk4ODgsMTAuMTA2ODQ4IEMxMzUuMDM2NTI4LC0xNS45OTc3OTIgNTMuMjI5ODQ4LDE1LjAyNDA4OCAxOS45NTc1NjgsMzAuODYxNTY4IiBpZD0iRmlsbC0xIiBmaWxsPSIjRjNGMkYyIiBtYXNrPSJ1cmwoI21hc2stMikiPjwvcGF0aD4KICAgICAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTE3MS44Mzk5NjQsMTYuNzI3NjY0IEwyNy4wNTY4ODQsMTYuNzI3NjY0IEMyMy4yMTQ5NjQsMTYuNzI3NjY0IDIwLjEwMDM2NCwxOS44NDIyNjQgMjAuMTAwMzY0LDIzLjY4MzAyNCBMMjAuMTAwMzY0LDI3LjIyNjgyNCBMMjAuMTAwMzY0LDExMy41MzY2MjQgTDIwLjEwMDM2NCwxMTcuMDgwNDI0IEMyMC4xMDAzNjQsMTIwLjkyMTE4NCAyMy4yMTQ5NjQsMTI0LjAzNTc4NCAyNy4wNTY4ODQsMTI0LjAzNTc4NCBMMTcxLjgzOTk2NCwxMjQuMDM1Nzg0IEMxNzUuNjgxODg0LDEyNC4wMzU3ODQgMTc4Ljc5NTMyNCwxMjAuOTIxMTg0IDE3OC43OTUzMjQsMTE3LjA4MDQyNCBMMTc4Ljc5NTMyNCwxMTMuNTM2NjI0IEwxNzguNzk1MzI0LDI3LjIyNjgyNCBMMTc4Ljc5NTMyNCwyMy42ODMwMjQgQzE3OC43OTUzMjQsMTkuODQyMjY0IDE3NS42ODE4ODQsMTYuNzI3NjY0IDE3MS44Mzk5NjQsMTYuNzI3NjY0IiBpZD0iRmlsbC00IiBmaWxsPSIjQjM4RjAwIj48L3BhdGg+CiAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTEyMy43ODcxOTYsNi4yMzQ0MiBMODcuMTU2NzE2LDYuMjM0NDIgQzg1LjQzNTI3Niw2LjIzNDQyIDg0LjAzOTc5Niw0LjgzODk0IDg0LjAzOTc5NiwzLjExNjM0IEM4NC4wMzk3OTYsMS4zOTYwNiA4NS40MzUyNzYsMC4wMDA1OCA4Ny4xNTY3MTYsMC4wMDA1OCBMMTIzLjc4NzE5NiwwLjAwMDU4IEMxMjUuNTA4NjM2LDAuMDAwNTggMTI2LjkwNDExNiwxLjM5NjA2IDEyNi45MDQxMTYsMy4xMTYzNCBDMTI2LjkwNDExNiw0LjgzODk0IDEyNS41MDg2MzYsNi4yMzQ0MiAxMjMuNzg3MTk2LDYuMjM0NDIiIGlkPSJGaWxsLTYiIGZpbGw9IiMwMDI0NTMiPjwvcGF0aD4KICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNOTAuMjkyNzc2LDE5Ljg0NDAwNCBDODguNTcxMzM2LDE5Ljg0NDAwNCA4Ny4xNzU4NTYsMTguNDQ4NTI0IDg3LjE3NTg1NiwxNi43MjcwODQgTDg3LjE3NTg1NiwzLjExNjgwNCBDODcuMTc1ODU2LDEuMzk2NTI0IDg4LjU3MTMzNiwwLjAwMTA0NCA5MC4yOTI3NzYsMC4wMDEwNDQgQzkyLjAxNDIxNiwwLjAwMTA0NCA5My40MDk2OTYsMS4zOTY1MjQgOTMuNDA5Njk2LDMuMTE2ODA0IEw5My40MDk2OTYsMTYuNzI3MDg0IEM5My40MDk2OTYsMTguNDQ4NTI0IDkyLjAxNDIxNiwxOS44NDQwMDQgOTAuMjkyNzc2LDE5Ljg0NDAwNCIgaWQ9IkZpbGwtOCIgZmlsbD0iIzAwMjQ1MyI+PC9wYXRoPgogICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0xMjAuNjUxMDIsMTkuODQ0MDA0IEMxMTguOTI5NTgsMTkuODQ0MDA0IDExNy41MzQxLDE4LjQ0ODUyNCAxMTcuNTM0MSwxNi43MjcwODQgTDExNy41MzQxLDMuMTE2ODA0IEMxMTcuNTM0MSwxLjM5NjUyNCAxMTguOTI5NTgsMC4wMDEwNDQgMTIwLjY1MTAyLDAuMDAxMDQ0IEMxMjIuMzcyNDYsMC4wMDEwNDQgMTIzLjc2OTEsMS4zOTY1MjQgMTIzLjc2OTEsMy4xMTY4MDQgTDEyMy43NjkxLDE2LjcyNzA4NCBDMTIzLjc2OTEsMTguNDQ4NTI0IDEyMi4zNzI0NiwxOS44NDQwMDQgMTIwLjY1MTAyLDE5Ljg0NDAwNCIgaWQ9IkZpbGwtMTAiIGZpbGw9IiMwMDI0NTMiPjwvcGF0aD4KICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMTc3Ljg2MzcyOCwxNi43Mjc2NjQgTDMzLjA4MDY0OCwxNi43Mjc2NjQgQzI5LjIzODcyOCwxNi43Mjc2NjQgMjYuMTI1Mjg4LDE5Ljg0MjI2NCAyNi4xMjUyODgsMjMuNjgzMDI0IEwyNi4xMjUyODgsMjcuMjI2ODI0IEwyNi4xMjUyODgsMTEzLjUzNjYyNCBMMjYuMTI1Mjg4LDExNy4wODA0MjQgQzI2LjEyNTI4OCwxMjAuOTIxMTg0IDI5LjIzODcyOCwxMjQuMDM1Nzg0IDMzLjA4MDY0OCwxMjQuMDM1Nzg0IEwxNzcuODYzNzI4LDEyNC4wMzU3ODQgQzE4MS43MDU2NDgsMTI0LjAzNTc4NCAxODQuODE5MDg4LDEyMC45MjExODQgMTg0LjgxOTA4OCwxMTcuMDgwNDI0IEwxODQuODE5MDg4LDExMy41MzY2MjQgTDE4NC44MTkwODgsMjcuMjI2ODI0IEwxODQuODE5MDg4LDIzLjY4MzAyNCBDMTg0LjgxOTA4OCwxOS44NDIyNjQgMTgxLjcwNTY0OCwxNi43Mjc2NjQgMTc3Ljg2MzcyOCwxNi43Mjc2NjQiIGlkPSJGaWxsLTEyIiBmaWxsPSIjRkZDRDAwIj48L3BhdGg+CiAgICAgICAgICAgICAgICAgICAgPG1hc2sgaWQ9Im1hc2stNCIgZmlsbD0id2hpdGUiPgogICAgICAgICAgICAgICAgICAgICAgICA8dXNlIHhsaW5rOmhyZWY9IiNwYXRoLTMiPjwvdXNlPgogICAgICAgICAgICAgICAgICAgIDwvbWFzaz4KICAgICAgICAgICAgICAgICAgICA8ZyBpZD0iQ2xpcC0xNSI+PC9nPgogICAgICAgICAgICAgICAgICAgIDxwb2x5Z29uIGlkPSJGaWxsLTE0IiBmaWxsPSIjMDAyRTZEIiBtYXNrPSJ1cmwoI21hc2stNCkiIHBvaW50cz0iNDMuNDQ2NjQgMTI0LjAzNTMyIDYwLjc3MDA4IDEyNC4wMzUzMiA2MC43NzAwOCAxNi43MjcyIDQzLjQ0NjY0IDE2LjcyNzIiPjwvcG9seWdvbj4KICAgICAgICAgICAgICAgICAgICA8cG9seWdvbiBpZD0iRmlsbC0xNiIgZmlsbD0iIzAwMkU2RCIgbWFzaz0idXJsKCNtYXNrLTQpIiBwb2ludHM9IjE1MC4xNzM2IDEyNC4wMzUzMiAxNjcuNDk1ODggMTI0LjAzNTMyIDE2Ny40OTU4OCAxNi43MjcyIDE1MC4xNzM2IDE2LjcyNzIiPjwvcG9seWdvbj4KICAgICAgICAgICAgICAgICAgICA8cG9seWdvbiBpZD0iRmlsbC0xNyIgZmlsbD0iI0YzRjJGMiIgbWFzaz0idXJsKCNtYXNrLTQpIiBwb2ludHM9IjE0My42NjkyNDggMTAwLjI2MjM5NiAxMjMuMjg2ODg4IDEwNi4zNzY3NTYgMTE4Ljk5MzcyOCA5Mi4wNjU4MzYgMTM5LjM3NjA4OCA4NS45NTE0NzYiPjwvcG9seWdvbj4KICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNNjYuNTgzNTM2LDEyOS44MDUwNDQgTDY2LjU4MzUzNiwxMjkuODA1MDQ0IEM2My40ODA1MzYsMTI5LjgwNTA0NCA2MC45NjQ0OTYsMTI3LjI4OTAwNCA2MC45NjQ0OTYsMTI0LjE4NjAwNCBMNjAuOTY0NDk2LDEyNC4wMzUyMDQgTDcyLjIwMjU3NiwxMjQuMDM1MjA0IEw3Mi4yMDI1NzYsMTI0LjE4NjAwNCBDNzIuMjAyNTc2LDEyNy4yODkwMDQgNjkuNjg2NTM2LDEyOS44MDUwNDQgNjYuNTgzNTM2LDEyOS44MDUwNDQiIGlkPSJGaWxsLTE4IiBmaWxsPSIjQzM5QzVEIiBtYXNrPSJ1cmwoI21hc2stNCkiPjwvcGF0aD4KICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMTQ0LjU1NDU2LDEyOS44MDUwNDQgTDE0NC41NTQ1NiwxMjkuODA1MDQ0IEMxNDEuNDUxNTYsMTI5LjgwNTA0NCAxMzguOTM1NTIsMTI3LjI4OTAwNCAxMzguOTM1NTIsMTI0LjE4NjAwNCBMMTM4LjkzNTUyLDEyNC4wMzUyMDQgTDE1MC4xNzM2LDEyNC4wMzUyMDQgTDE1MC4xNzM2LDEyNC4xODYwMDQgQzE1MC4xNzM2LDEyNy4yODkwMDQgMTQ3LjY1NzU2LDEyOS44MDUwNDQgMTQ0LjU1NDU2LDEyOS44MDUwNDQiIGlkPSJGaWxsLTE5IiBmaWxsPSIjQzM5QzVEIiBtYXNrPSJ1cmwoI21hc2stNCkiPjwvcGF0aD4KICAgICAgICAgICAgICAgICAgICA8cG9seWdvbiBpZD0iRmlsbC0yMCIgZmlsbD0iIzMzMzMzMyIgbWFzaz0idXJsKCNtYXNrLTQpIiBwb2ludHM9IjExLjAyMjU1MiAyMi4zMDU2NCAxMi4yOTM5MTIgMjIuMzA1NjQgMTAuNDQyNTUyIDE2LjA5ODQ4IDguNTkyMzUyIDIyLjMwNTY0IDkuODYyNTUyIDIyLjMwNTY0IDkuODYyNTUyIDEyMy4yMDQ3NiA4LjU5MjM1MiAxMjMuMjA0NzYgMTAuNDQyNTUyIDEyOS40MTE5MiAxMi4yOTM5MTIgMTIzLjIwNDc2IDExLjAyMjU1MiAxMjMuMjA0NzYiPjwvcG9seWdvbj4KICAgICAgICAgICAgICAgICAgICA8cG9seWdvbiBpZD0iRmlsbC0yMSIgZmlsbD0iIzMzMzMzMyIgbWFzaz0idXJsKCNtYXNrLTQpIiBwb2ludHM9IjE3NC4xNjExMjQgMTM4Ljk4NzYwNCAxNzQuMTYxMTI0IDE0MC4yNTc4MDQgMTgwLjM2ODI4NCAxMzguNDA3NjA0IDE3NC4xNjExMjQgMTM2LjU1NjI0NCAxNzQuMTYxMTI0IDEzNy44Mjc2MDQgMjYuNTkyODg0IDEzNy44Mjc2MDQgMjYuNTkyODg0IDEzNi41NTYyNDQgMjAuMzg2ODg0IDEzOC40MDc2MDQgMjYuNTkyODg0IDE0MC4yNTc4MDQgMjYuNTkyODg0IDEzOC45ODc2MDQiPjwvcG9seWdvbj4KICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgPC9nPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+",
                                          alt: "L",
                                          style: {
                                            height: "40px",
                                            width: "160px",
                                            "box-sizing": "border-box",
                                          },
                                        })
                                      ),
                                      m(
                                        "div",
                                        {
                                          style: {
                                            "box-sizing": "border-box",
                                            margin: "0px",
                                            display: "flex",
                                            "flex-direction": "column",
                                            "align-items": "flex-start",
                                            "text-align": "center",
                                            "justify-content": "center",
                                            "padding-left": "16px",
                                          },
                                        },
                                        [
                                          m(
                                            "h3",
                                            {
                                              slot: "title",
                                              style: {
                                                "font-size": "16px",
                                                "line-height": "24px",
                                                "box-sizing": "border-box",
                                                margin: "0px",
                                                padding: "0px",
                                                "font-weight": "400",
                                                color: "rgb(51, 51, 51)",
                                                "text-align": "center",
                                                "white-space": "nowrap",
                                              },
                                            },
                                            "Hasta 20kg"
                                          ),
                                          m(
                                            "span",
                                            {
                                              slot: "description",
                                              style: {
                                                "font-size": "10px",
                                                "line-height": "17.6px",
                                                "box-sizing": "border-box",
                                                margin: "0px",
                                                padding: "0px",
                                                "font-weight": "400",
                                                color: "rgb(51, 51, 51)",
                                                "text-align": "center",
                                              },
                                            },
                                            "Dimensión: 55x55x39"
                                          ),
                                        ]
                                      ),
                                    ]
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
                              display: "flex",
                              gap: "16px 24px",
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
                                  "box-sizing": "border-box",
                                  visibility: "visible",
                                  display: "block",
                                  "--_ui-button-bg-color": "#ffcd00",
                                  "--_ui-button-bg-color-disabled": "#f3f2f2",
                                  "--_ui-button-bg-color-hover": "#b38f00",
                                  "--_ui-button-text-color": "#002e6d",
                                  "--_ui-button-border-color": "#b38f00",
                                  "--_ui-button-border": "solid 0.0625rem",
                                  "--_ui-button-border-color-disabled":
                                    "#949494",
                                  "--_ui-button-font-family": "1",
                                  "--_ui-button-min-width": "1",
                                  "--_ui-button-border-radius": "1",
                                  "--_ui-button-color": "1",
                                  "--_ui-button-text-color-hover": "1",
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
                                    type: "button",
                                    style: {
                                      "min-width": "128px",
                                      "font-size": "16px",
                                      "line-height": "24px",
                                      "box-sizing": "border-box",
                                      width: "100%",
                                      color: "rgb(0, 46, 109)",
                                      "background-color": "rgb(255, 205, 0)",
                                      "border-color": "rgb(179, 143, 0)",
                                      height: "56px",
                                      border: "1px solid rgb(179, 143, 0)",
                                      "text-transform": "none",
                                      "font-weight": "700",
                                      "border-radius": "8px",
                                      padding: "0px 24px",
                                      "--mdc-ripple-fg-opacity": "0.12",
                                      "--mdc-ripple-fg-size": "0",
                                      "--mdc-ripple-left": "0",
                                      "--mdc-ripple-top": "0",
                                      "--mdc-ripple-fg-scale": "1",
                                      "--mdc-ripple-fg-translate-end": "0",
                                      "--mdc-ripple-fg-translate-start": "0",
                                      "-webkit-tap-highlight-color":
                                        "rgba(0, 0, 0, 0)",
                                      "font-family": "Roboto, sans-serif",
                                      "-webkit-font-smoothing": "antialiased",
                                      "letter-spacing": "1.42857px",
                                      "text-decoration":
                                        "none solid rgb(0, 46, 109)",
                                      display: "inline-flex",
                                      position: "relative",
                                      "align-items": "center",
                                      "justify-content": "center",
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
                                        "border-radius": "8px",
                                        top: "0px",
                                        left: "0px",
                                        position: "absolute",
                                        width: "100%",
                                        height: "54px",
                                        overflow: "hidden",
                                      },
                                    }),
                                    m(
                                      "span",
                                      {
                                        style: {
                                          "box-sizing": "border-box",
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
                                        " COMENZAR ENVÍO "
                                      )
                                    ),
                                  ]
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
                                  "box-sizing": "border-box",
                                  visibility: "visible",
                                  display: "block",
                                  "--_ui-button-bg-color": "transparent",
                                  "--_ui-button-bg-color-disabled":
                                    "transparent",
                                  "--_ui-button-bg-color-hover": "transparent",
                                  "--_ui-button-text-color": "#002e6d",
                                  "--_ui-button-text-color-hover": "#000042",
                                  "--_ui-button-border": "none",
                                  "--_ui-button-min-width": "1",
                                  "--_ui-button-border-color": "transparent",
                                  "--_ui-button-border-color-disabled":
                                    "#949494",
                                  "--_ui-button-font-family": "1",
                                  "--_ui-button-border-radius": "1",
                                  "--_ui-button-color": "1",
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
                                    href: "/es/es/particulares/enviar/envios-nacionales/envios-economicos/servicio-especial-de-paqueteria",
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
                                      "--mdc-ripple-fg-size": "0",
                                      "--mdc-ripple-left": "0",
                                      "--mdc-ripple-top": "0",
                                      "--mdc-ripple-fg-scale": "1",
                                      "--mdc-ripple-fg-translate-end": "0",
                                      "--mdc-ripple-fg-translate-start": "0",
                                      "-webkit-tap-highlight-color":
                                        "rgba(0, 0, 0, 0)",
                                      "font-family": "Roboto, sans-serif",
                                      "-webkit-font-smoothing": "antialiased",
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
                                        " MÁS INFO >"
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
                          ]
                        ),
                      ])
                    )
                  )
                )
              )
            )
          ),
        ]
      ),
    ],
  };
}

function SiemprePensandoEnTi() {
  return {
    model: {
      titulo: "Siempre pensando en ti",
      items: [
        {
          img: "img/siemprePensandoEnti1.jpg",
          titulo: "Gestión Aduanera",
          descripcion:
            "Infórmate sobre cómo realizar los trámites aduaneros que necesitas.",
          tituloLink: "MÁS INFO",
        },
        {
          img: "img/siemprePensandoEnti1.jpg",
          titulo: "Gestión Aduanera",
          descripcion:
            "Infórmate sobre cómo realizar los trámites aduaneros que necesitas.",
          tituloLink: "MÁS INFO",
        },
      ],
    },
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
              "max-width": "1366px",
              "padding-left": "24px",
              "padding-right": "24px",
              "margin-left": "auto",
              "margin-right": "auto",
            },
          },
          m("div", { slot: "block", style: { "box-sizing": "border-box" } }, [
            m(
              "correos-ui-plain-text",
              {
                "margin-active": "true",
                color: "var(--theme-color-strongGrey)",
                "text-align": "left",
                style: {
                  "--ui-plain-text-color": "var(--theme-color-strongGrey)",
                  "--ui-plain-text-link-color": "var(--theme-color-blue)",
                  "--ui-plain-text-link-decoration": "none",
                  "--ui-plain-text-link-font-weight": "bold",
                  "--ui-plain-text-font-weight": "400",
                  "--ui-plain-text-text-align": "left",
                  "box-sizing": "border-box",
                  visibility: "visible",
                  "--_ui-plain-text-color": "1)",
                  "--_ui-plain-text-link-color": "1",
                  "--_ui-plain-text-link-decoration": "1",
                  "--_ui-plain-text-link-font-weight": "1",
                  "--_ui-plain-text-font-weight": "1",
                  "--_ui-plain-text-text-align": "1",
                  display: "block",
                  width: "100%",
                  "--_ui-plaintext-color-icon": "1",
                  "--_ui-plaintext-color-text": "1",
                  "--_ui-plaintext-color-bg": "1",
                },
              },
              m(
                "div",
                {
                  style: {
                    "grid-column-end": "span 8",
                    "grid-column-start": "3",
                    "margin-bottom": "24px",
                    "box-sizing": "border-box",
                    color: "rgb(51, 51, 51)",
                    "text-align": "left",
                    "justify-content": "center",
                  },
                },
                m(
                  "div",
                  { style: { "box-sizing": "border-box" } },
                  m(
                    "h2",
                    {
                      slot: "plaintext",
                      style: {
                        "font-size": "40px",
                        "line-height": "56px",
                        "box-sizing": "border-box",
                        "font-weight": "400",
                        margin: "0px",
                        padding: "0px",
                      },
                    },
                    this.state.model.titulo
                  )
                )
              )
            ),

            m(
              "correos-cdk-section-automatic-responsive",
              {
                variant: "1-2-3",
                "custom-column": "false",
                size: "lg",
                style: {
                  "box-sizing": "border-box",
                  visibility: "visible",
                  display: "block",
                  "--_cdk-section-automatic-responsive-background-color": "1",
                  "--_cdk-section-automatic-responsive-color-line": "1",
                },
              },
              m(
                "div",
                { style: { "box-sizing": "border-box" } },
                m(
                  "div",
                  { style: { "box-sizing": "border-box" } },
                  this.state.model.items.map((item) => m(Item, item)),
                  m(
                    "section",
                    {
                      slot: "components",
                      style: {
                        "box-sizing": "border-box",
                        width: "calc(100% - 64px)",
                        "grid-template-columns":
                          "417.578px 417.578px 417.578px",
                        gap: "32px",
                        display: "flex",
                      },
                    },

                    [
                      m(
                        "correos-ui-product-quality-card",
                        {
                          "href-link":
                            "/es/es/atencion-al-cliente/informacion-aduanera",
                          "target-link": "_self",
                          size: "sm",
                          style: {
                            "box-sizing": "border-box",
                            visibility: "visible",
                            display: "block",
                            "background-color": "rgb(255, 255, 255)",
                            border: "1px solid rgb(203, 203, 203)",
                            "border-radius": "8px",
                            "box-shadow":
                              "rgba(0, 0, 0, 0.2) 0px 10px 20px 0px",
                            width: "100%",
                            "--_ui-product-quality-card-bg": "1",
                            "--_ui-product-quality-card-shadow-desktop":
                              "0 10px 20px 0 rgba(0, 0, 0, 0.1)",
                            "--_ui-product-quality-card-shadow":
                              "0 10px 20px 0 rgba(0, 0, 0, 0.2)",
                            "--_ui-product-quality-card-border": "1px solid 1",
                            "--_ui-product-quality-card-title": "1",
                            "--_ui-product-quality-card-subtitle": "1",
                            "--_ui-product-quality-card-icon": "1",
                            "--_ui-product-quality-card-paragraph": "1",
                            "--_ui-product-quality-card-radius": "1",
                          },
                        },
                        [
                          //VistaMÓVIL
                          m(
                            "div",
                            {
                              style: {
                                display: "none",
                                "box-sizing": "border-box",
                                width: "100%",
                                padding: "16px 24px 16px 16px",
                                "justify-content": "space-between",
                                "text-decoration": "none solid rgb(51, 51, 51)",
                                "border-radius": "8px",
                              },
                            },
                            [
                              m(
                                "div",
                                { style: { "box-sizing": "border-box" } },
                                m("img", {
                                  slot: "image-mobile",
                                  src: "/content/dam/correos/imagenes/ilustraciones/ilustraciones-aduanas/ilustraciones_aduanas_2.jpg",
                                  alt: "ilustraciones aduanas",
                                  style: {
                                    "box-sizing": "border-box",
                                    width: "72px",
                                    height: "72px",
                                    "margin-right": "16px",
                                  },
                                })
                              ),
                              m(
                                "div",
                                {
                                  style: {
                                    "box-sizing": "border-box",
                                    display: "flex",
                                    width: "100%",
                                    "align-items": "center",
                                    "flex-direction": "column",
                                  },
                                },
                                [
                                  m(
                                    "div",
                                    {
                                      style: {
                                        "box-sizing": "border-box",
                                        height: "72px",
                                        overflow: "hidden",
                                        width: "-webkit-fill-available",
                                      },
                                    },
                                    [
                                      m(
                                        "h2",
                                        {
                                          slot: "title-mobile",
                                          style: {
                                            " margin-bottom": "4px",
                                            "margin-bottom": "4px",
                                            "font-size": "24px",
                                            "line-height": "36px",
                                            "box-sizing": "border-box",
                                            overflow: "hidden",
                                            "text-overflow": "ellipsis",
                                            display: "block",
                                            margin: "0px 0px 4px",
                                            padding: "0px",
                                            color: "rgb(51, 51, 51)",
                                            "font-weight": "700",
                                          },
                                        },
                                        "Gestión Aduanera"
                                      ),
                                      m(
                                        "div",
                                        {
                                          style: {
                                            display: "block",
                                            "box-sizing": "border-box",
                                          },
                                        },
                                        m(
                                          "span",
                                          {
                                            slot: "subtitle-mobile",
                                            style: {
                                              "font-size": "16px",
                                              "line-height": "24px",
                                              "box-sizing": "border-box",
                                              margin: "0px",
                                              padding: "0px",
                                              color: "rgb(51, 51, 51)",
                                              "font-weight": "300",
                                              overflow: "hidden",
                                              "text-overflow": "ellipsis",
                                              display: "block",
                                            },
                                          },
                                          "Infórmate sobre cómo realizar los trámites aduaneros que necesitas."
                                        )
                                      ),
                                      m(
                                        "div",
                                        {
                                          style: {
                                            display: "none",
                                            "box-sizing": "border-box",
                                            "align-items": "center",
                                          },
                                        },
                                        m("i", {
                                          slot: "icon-mobile",
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
                                            color: "rgb(0, 46, 109)",
                                            "margin-left": "8px",
                                          },
                                        })
                                      ),
                                    ]
                                  ),
                                  m(
                                    "div",
                                    {
                                      style: {
                                        "box-sizing": "border-box",
                                        width: "100%",
                                        "margin-top": "16px",
                                      },
                                    },
                                    m(
                                      "correos-ui-button",
                                      {
                                        "href-link":
                                          "/es/es/atencion-al-cliente/informacion-aduanera",
                                        theme: "secondary",
                                        variant: "link",
                                        form: "",
                                        target: "_self",
                                        style: {
                                          "box-sizing": "border-box",
                                          visibility: "visible",
                                          display: "block",
                                          "--_ui-button-bg-color":
                                            "transparent",
                                          "--_ui-button-bg-color-disabled":
                                            "transparent",
                                          "--_ui-button-bg-color-hover":
                                            "transparent",
                                          "--_ui-button-text-color": "#002e6d",
                                          "--_ui-button-text-color-hover":
                                            "#000042",
                                          "--_ui-button-border": "none",
                                          "--_ui-button-min-width": "1",
                                          "--_ui-button-border-color":
                                            "transparent",
                                          "--_ui-button-border-color-disabled":
                                            "#949494",
                                          "--_ui-button-font-family": "1",
                                          "--_ui-button-border-radius": "1",
                                          "--_ui-button-color": "1",
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
                                            href: "/es/es/atencion-al-cliente/informacion-aduanera",
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
                                              "background-color":
                                                "rgba(0, 0, 0, 0)",
                                              "border-color":
                                                "rgba(0, 0, 0, 0)",
                                              height: "56px",
                                              border:
                                                "0px none rgba(0, 0, 0, 0)",
                                              "text-transform": "none",
                                              "border-radius": "8px",
                                              "--mdc-ripple-fg-size": "0",
                                              "--mdc-ripple-left": "0",
                                              "--mdc-ripple-top": "0",
                                              "--mdc-ripple-fg-scale": "1",
                                              "--mdc-ripple-fg-translate-end":
                                                "0",
                                              "--mdc-ripple-fg-translate-start":
                                                "0",
                                              "-webkit-tap-highlight-color":
                                                "rgba(0, 0, 0, 0)",
                                              "font-family":
                                                "Roboto, sans-serif",
                                              "-webkit-font-smoothing":
                                                "antialiased",
                                              "letter-spacing": "1.42857px",
                                              "text-decoration":
                                                "none solid rgb(0, 46, 109)",
                                              display: "inline-flex",
                                              position: "relative",
                                              "align-items": "center",
                                              outline:
                                                "rgb(0, 46, 109) none 0px",
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
                                                height: "100%",
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
                                ]
                              ),
                            ]
                          ),

                          /*                           m(
                            "div",
                            {
                              style: {
                                display: "flex",
                                "flex-direction": "column",
                                height: "436px",
                                "box-shadow":
                                  "rgba(0, 0, 0, 0.1) 0px 10px 20px 0px",
                                padding: "24px",
                                "box-sizing": "border-box",
                                width: "100%",
                              },
                            },
                            [
                              m(
                                "figure",
                                {
                                  style: {
                                    display: "flex",
                                    "align-items": "center",
                                    width: "176px",
                                    height: "150.375px",
                                    "margin-right": "24px",
                                    "min-width": "130px",
                                    "box-sizing": "border-box",
                                    margin: "0px 24px 0px 0px",
                                    padding: "0px",
                                    border: "0px none rgb(51, 51, 51)",
                                    font: "16px / 23.84px Cartero, 'Helvetica Neue', Helvetica, Arial, sans-serif",
                                    "vertical-align": "baseline",
                                  },
                                },
                                m("img", {
                                  slot: "image-desktop",
                                  src: this.state.model.items[0].img,
                                  alt: "ilustraciones aduanas",
                                  style: {
                                    "margin-bottom": "24px",
                                    "margin-right": "0px",
                                    "box-sizing": "border-box",
                                    width: "100%",
                                    height: "150px",
                                  },
                                })
                              ),
                              m(
                                "div",
                                {
                                  style: {
                                    display: "flex",
                                    "flex-direction": "column",
                                    height: "237.625px",
                                    "box-sizing": "border-box",
                                  },
                                },
                                [
                                  m(
                                    "div",
                                    { style: { "box-sizing": "border-box" } },
                                    [
                                      m(
                                        "h2",
                                        {
                                          slot: "title-desktop",
                                          style: {
                                            "font-size": "24px",
                                            "line-height": "36px",
                                            "box-sizing": "border-box",
                                            margin: "0px 0px 8px",
                                            padding: "0px",
                                            color: "rgb(51, 51, 51)",
                                            "font-weight": "700",
                                          },
                                        },
                                        "Gestión Aduanera"
                                      ),
                                      m(
                                        "div",
                                        {
                                          style: {
                                            display: "flex",
                                            "box-sizing": "border-box",
                                          },
                                        },
                                        m(
                                          "p",
                                          {
                                            slot: "body-text-desktop",
                                            style: {
                                              "font-size": "16px",
                                              "line-height": "24px",
                                              "box-sizing": "border-box",
                                              margin: "0px 0px 24px",
                                              padding: "0px",
                                              color: "rgb(51, 51, 51)",
                                              "font-weight": "400",
                                            },
                                          },
                                          "Infórmate sobre cómo realizar los trámites aduaneros que necesitas."
                                        )
                                      ),
                                    ]
                                  ),
                                  m(
                                    "div",
                                    {
                                      style: {
                                        "margin-top": "auto",
                                        display: "flex",
                                        "box-sizing": "border-box",
                                        "flex-direction": "row",
                                      },
                                    },
                                    m(
                                      "div",
                                      {
                                        style: {
                                          "margin-right": "16px",
                                          "margin-bottom": "16px",
                                          "box-sizing": "border-box",
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
                                            "/es/es/atencion-al-cliente/informacion-aduanera",
                                          target: "_self",
                                          "component-title":
                                            "Siempre pensando en ti",
                                          "element-title": "Gestión Aduanera",
                                          "component-type":
                                            "productqualitycard",
                                          "is-send-analytic": "false",
                                          form: "",
                                          style: {
                                            "box-sizing": "border-box",
                                            visibility: "visible",
                                            display: "block",
                                            "--_ui-button-bg-color":
                                              "transparent",
                                            "--_ui-button-bg-color-disabled":
                                              "transparent",
                                            "--_ui-button-bg-color-hover":
                                              "transparent",
                                            "--_ui-button-text-color":
                                              "#002e6d",
                                            "--_ui-button-text-color-hover":
                                              "#000042",
                                            "--_ui-button-border": "none",
                                            "--_ui-button-min-width": "1",
                                            "--_ui-button-border-color":
                                              "transparent",
                                            "--_ui-button-border-color-disabled":
                                              "#949494",
                                            "--_ui-button-font-family": "1",
                                            "--_ui-button-border-radius": "1",
                                            "--_ui-button-color": "1",
                                            "white-space": "nowrap",
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
                                              href: "/es/es/atencion-al-cliente/informacion-aduanera",
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
                                                "background-color":
                                                  "rgba(0, 0, 0, 0)",
                                                "border-color":
                                                  "rgba(0, 0, 0, 0)",
                                                height: "56px",
                                                border:
                                                  "0px none rgba(0, 0, 0, 0)",
                                                "text-transform": "none",
                                                "border-radius": "8px",
                                                "--mdc-ripple-fg-size": "0",
                                                "--mdc-ripple-left": "0",
                                                "--mdc-ripple-top": "0",
                                                "--mdc-ripple-fg-scale": "1",
                                                "--mdc-ripple-fg-translate-end":
                                                  "0",
                                                "--mdc-ripple-fg-translate-start":
                                                  "0",
                                                "-webkit-tap-highlight-color":
                                                  "rgba(0, 0, 0, 0)",
                                                "font-family":
                                                  "Roboto, sans-serif",
                                                "-webkit-font-smoothing":
                                                  "antialiased",
                                                "letter-spacing": "1.42857px",
                                                "text-decoration":
                                                  "none solid rgb(0, 46, 109)",
                                                display: "inline-flex",
                                                position: "relative",
                                                "align-items": "center",
                                                outline:
                                                  "rgb(0, 46, 109) none 0px",
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
                                                    style: {
                                                      "box-sizing":
                                                        "border-box",
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
                                                  "font-family":
                                                    "correos-icons",
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
                                    )
                                  ),
                                ]
                              ),
                            ]
                          ), */
                        ]
                      ),
                    ]
                  )
                )
              )
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

function SiemprePensandoEnTi2() {  
  return {

    model:{
      items:[
        {
          titulo:"titulo",
          img:"xxx",
          texto:"xxxx"
        },
        {
          titulo:"titulo",
          img:"yyy",
          texto:"yyy"
        },
        {
          titulo:"titulo",
          img:"yyy",
          texto:"yyy"
        },
      ]

    },
    view: () => [
      /* m( "div", {
          style: { display: "flex", width: "100%", height: "500px", border: "2px solid red", },
        },

        m("div", {
          style: { width: "30px", height: "40px", border: "2px solid blue",
          },
        })
      ), */

      //padre1
      m("section",{
          style: {
            display: "flex", "flex-wrap": "wrap", 
            "justify-content": "space-between", 
            border: "2px solid gray", margin: "50px auto", height: "500px", width: "80%", },
        },
          this.state.model.items.map(i=>m(Box,i)),
      ),
    ],
  }

  function Box(){
    return {
      view:({attrs})=>m("div",{

              style: {
                border: "0.5px solid gray", "flex": "0 0 400px","border-radius": "5px", "box-shadow": "0 0 10px lightblue", width: "30%", height: "400px", padding: "20px", },
            },[

              m("img", {
                style: {
                  border: "0.5px solid gray", "border-radius": "5px", "box-shadow": "0 0 10px lightblue", width: "100%", height: "40%", 
                  "background-image": `url('${attrs.img}')`, 
                  "background-repeat": "no-repeat", "background-size": "cover", "background-position": "center", },
              }),

              m("div",{
                  style: {
                    border: "0.5px solid gray", "border-radius": "5px", "box-shadow": "0 0 10px lightblue", width: "100%", height: "10%", color: "black", "font-size":"24px", "font-family":"Helvetica Neue", "font-weight":"700", "text-align": "left", },
                },
                attrs.titulo
              ),

              m("div", {
                style: {
                  border: "0.5px solid gray", "border-radius": "5px", "box-shadow": "0 0 10px lightblue", width: "100%", height: "30%", color: "black", "font-size":"16px", "font-family":"Helvetica Neue", "font-weight":"400", },
              },
              attrs.texto),

              m("div", {
                href: "",
                style: {
                  border: "0.5px solid gray",
                  "border-radius": "5px",
                  "box-shadow": "0 0 10px lightblue",
                  width: "100%",
                  height: "20%",
                },
              },
              [
                m("a", {

                  style: {
                    
                  }
                }

                )
              ]
            ),
            ]
          )
    }
  }
}

function Page() {
  return {
    view: () => [
      m(Header),
      m(EnviosNacionales),
      m(Servicioespecialpaqueteria),
      m(SiemprePensandoEnTi2),
      m("main"),
    ],
  };
}

export { Page };
