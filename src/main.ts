import App from "./App.vue";

import { Application, Container, Sprite, Text, Texture } from "pixi.js";

const game = new Application({
    width: 500,
    height: 500,
});

document.body.append(game.view);
import { createRenderer } from "vue";

const renderer = createRenderer<Container, Container>({
    createElement(type) {
        // container
        let element;
        switch (type) {
            case "Container":
                element = new Container();
                break;
            case "Sprite":
                element = new Sprite();
                break;
            default:
                throw new Error("类型不存在${type}");
                break;
        }
        return element;
    },
    patchProp(el, key, preVal, nextVal) {
        switch (key) {
            case "texture":
                (el as Sprite).texture = Texture.from(nextVal);
                break;
            default:
                break;
        }
    },
    insert(el, parent) {
        if (el && parent) {
            parent.addChild(el);
        }
    },
    remove(el) {
        if (el && el.parent) {
            el.parent.removeChild(el);
        }
    },
    createText(text) {
        return new Text(text);
    },
    createComment(text) {
        return new Text(text);
    },
    setText() {},
    setElementText() {},
    parentNode(node) {
        return node.parent;
    },
    nextSibling(node) {
        return null;
    },
});

renderer.createApp(App).mount(game.stage);
