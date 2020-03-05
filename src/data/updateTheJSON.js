// Get the current JSON
// set the BIN id in the url (if it changed)
// Add/modify the JSON
// Copy/paste eveything into a jsfiddle and execute (http://jsfiddle.net/)



$("#clickMe").click(function () {
    var obj = {
        "weeks": [
            {
                "name": "Week 1",
                "id": 1,
                "days": [
                    {"id": 1},
                    {"id": 2},
                    {"id": 3, "details": "Small Feature Cutoff", "class": "sf-cutoff"},
                    {"id": 4},
                    {"id": 5}
                ]
            },
            {
                "name": "Week 2",
                "id": 2,
                "days": [
                    {"id": 1, "details": "Bugfix Cutoff", "class": "bf-cutoff"},
                    {"id": 2},
                    {"id": 3},
                    {"id": 4, "details": "Large Feature Cutoff", "class": "lf-cutoff"},
                    {"id": 5, "details": "Release Day", "class": "release-day"}
                ]
            }
        ],
        "cadence": [
            {
                "name": "Cert Branch",
                "class": "cert-container",
                "id": 1,
                "branches": [
                    {
                        "name": "Develop",
                        "id": 1,
                        "class": "develop"
                    },
                    {
                        "name": "Release",
                        "id": 2,
                        "class": "release"
                    },
                    {
                        "name": "Develop",
                        "id": 3,
                        "class": "develop"
                    }
                ],
                "actions": [
                    {
                        "class": "develop",
                        "id": 1,
                        "branch": [
                            {
                                "name": "Development",
                                "class": "action",
                                "id": 1
                            }
                        ]
                    },
                    {
                        "class": "release",
                        "id": 2,
                        "branch": [
                            {
                                "name": "Go Live State Regression",
                                "class": "action regression",
                                "id": 1
                            },
                            {
                                "name": "All Defects",
                                "class": "action defects",
                                "id": 2
                            },
                            {
                                "name": "Blockers Only",
                                "class": "action blockers",
                                "id": 3
                            }
                        ]
                    },
                    {
                        "class": "develop",
                        "id": 3,
                        "branch": [
                            {
                                "name": "Development",
                                "class": "action",
                                "id": 1
                            }
                        ]
                    }
                ]
            }
        ],
        "sprint": []
    };
    var data = JSON.stringify(obj);

    // do update
    $.ajax({
        url: "https://api.myjson.com/bins/14xvmi",
        type: "PUT",
        data: data,
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (data, textStatus, jqXHR) {
        var json = JSON.stringify(data);
        $("#data").val(json);
        }
    });
});

<textarea id="data" rows="5" cols="40"></textarea>
<br />
<input id="clickMe" type="button" value="Update JSON" />