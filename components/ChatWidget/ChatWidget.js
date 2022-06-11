import { useEffect, useRef, useState } from "react";
import IconSpinner from "../../icons/IconSpinner";
import styles from "./ChatWidget.module.css"

export default function ChatWidget({ offset = true }) {
    const ref = useRef();
    const [ active, setActive ] = useState(false);

    useEffect(() => {
        window.JustWidgetHandlers = {
            onWidgetReady: function () {
                window.justWidgetApi.addCustomStyles("https://ea.itb-dev.ru/chatwidget.css");
            },
            onWidgetToggle: function (isOpen) {
                setActive(isOpen);
            },
            startBlink: function(title) {}
        }

        window.justWidgetApi = {
            getTargetOrigin: function () {
                var justWidgetIframeSrc = document.getElementById('justwidget--iframe').src;
                var srcParts = justWidgetIframeSrc.split('/');
                return srcParts.splice(0, 3).join('/');
            },
            postMessage: function (message) {
                var justWidgetIframe = document.getElementById('justwidget--iframe').contentWindow;
                justWidgetIframe.postMessage(message, this.getTargetOrigin());
            },
            open: function () {
                var message = {
                    type: 'justWidget.open'
                };

                this.postMessage(JSON.stringify(message));
            },
            close: function () {
                var message = {
                    type: 'justWidget.close'
                };

                this.postMessage(JSON.stringify(message));
            },
            sendText: function (text) {
                let message = {
                    type: 'justWidget.sendText',
                    data: {
                        text: text
                    }
                };

                this.postMessage(JSON.stringify(message));
            },
            addCustomStyles: function (stylesheetURL) {
                var message = {
                    type: 'justWidget.styles',
                    data: {
                        URL: stylesheetURL
                    }
                };

                this.postMessage(JSON.stringify(message));
            },
        };

        window.addEventListener("message", function (event) {
            let type, message;

            try {
                message = JSON.parse(event.data);
                type = message.type;
            } catch (e) {
                //console.error("JustWidget invalid Event.data event.data: ",  event.data);
            }

            switch (type) {
                case "justWidget.ready": {
                    window.JustWidgetHandlers.onWidgetReady();
                    return;
                }
                case "justWidget.toggle": {
                    window.JustWidgetHandlers.onWidgetToggle(message.data.isOpen);
                    return;
                }
                case "justWidget.newMessage": {
                    window.JustWidgetHandlers.startBlink(message.title || 'Новое сообщение');
                    return;
                }
                default: {
                    return;
                }
            }
        });
    }, [])

    function onLoad() {
        window.justWidgetApi.open()
    }

    return (
        <div className={[styles.widget, (!offset ? styles.nb : '')].join(" ")}>
            {!active && (
                <div className={styles.spinner}>
                    <IconSpinner/>
                </div>
            )}
            <iframe ref={ref} onLoad={onLoad} title="Chat widget" id="justwidget--iframe" src="https://bot.jaicp.com/chatwidget/NvbhwUTU:08dbc6171cc772bd85c2a9f7ae270226b049732d/justwidget-iframe.html" frameBorder="0"/>
        </div>
    )
}