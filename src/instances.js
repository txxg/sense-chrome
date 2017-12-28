(function () {
    var global = window;
    var saved_ins, saved_popup;

    function reloadIns() {
        var savedInsJson = localStorage.getItem('sense_ins') || '{}';
        console.log(savedInsJson)
        var savedIns = JSON.parse(savedInsJson);
        var $selCluster = $('#sel_cluster');

        $selCluster.empty();
        for (var ins in savedIns) {
            $selCluster.append('<li><a href="#" url="' + savedIns[ins] + '">' + ins + '</a></li>');
        }

        $("#sel_cluster > li > a").click(function (e) {
            e.preventDefault();
            $("#es_server").val($(this).attr("url"));
            $("#selected_cluster").text($(this).text());
        });
    }

    function init() {
        reloadIns();

        var keptVal = localStorage.getItem('sense_ins');
        saved_popup = $("#ins_popup");
        saved_popup.on('shown', function () {
            $('<div id="saved_ins">' + ((!keptVal || keptVal === '{}')
                ? '{\n\t "testCluster":"http://user:passwd@localhost:9200"\n}'
                : keptVal) + '</div>').appendTo(saved_popup.find(".modal-body"));

            saved_ins = ace.edit("saved_ins");
            saved_ins.getSession().setMode("ace/mode/json");
            saved_ins.getSession().setFoldStyle('markbeginend');
            saved_ins.setReadOnly(false);
            saved_ins.renderer.setShowPrintMargin(false);
            sense.editor.getSession().setUseWrapMode(true);
        });

        saved_popup.on('hidden', function () {
            saved_popup.find('.modal-body #saved_ins').remove();
            saved_popup.find('.modal-body .nav li').remove();
            saved_ins = null;
        });

        saved_popup.find(".btn-primary").click(function () {
            localStorage.setItem('sense_ins', saved_ins.getValue());
            reloadIns();
        });
    }

    global.sense.ins = {
        init: init
    };
})();





