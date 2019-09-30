var Localize = require("../index.js");

var transformer = Localize.fromGoogleSpreadsheet("0Aq6WlQdq71FydDZlaWdmMEUtc2tUb1k2cHRBS2hzd2c");
transformer.setKeyCol('KEY');

transformer.save("samples/Translations.kt", { valueCol: "", format: "kotlinTemplate", className: 'Translations', header: 'package: kotlin.example' });
