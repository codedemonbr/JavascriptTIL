import $ from "jquery";
const loadHtmlSuccessCallbacks = [];

export function onLoadHtmlSuccess(callback) {
    if (!loadHtmlSuccessCallbacks.includes(callback)) {
        loadHtmlSuccessCallbacks.push(callback);
    }
}

function loadIncludes(parent) {
    if (!parent) parent = "body";

    $(parent)
        .find("[wm-include]")
        .each(function(i, element) {
            const url = $(element).attr("wm-include");
            $.ajax({
                url,
                success(data) {
                    $(element).html(data);
                    $(element).removeAttr("wm-include"); //removendo para o mesmo elemento não ser recarregado mais de uma vez

                    loadHtmlSuccessCallbacks.forEach((callback) =>
                        callback(data)
                    );

                    loadIncludes(element); //chamada recursiva para caso os filhos tenham wm-include
                },
            });
        });
}

loadIncludes(); //chamando a primeira vez para que ele comece a carregar pelo body
