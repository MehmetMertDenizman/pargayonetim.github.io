$.getJSON("ilçeler.json", function (sonuc)
{
    $("#il").html("<option>Seçiniz</option>");
    $.each(sonuc, function (index, value)
    {
        var row = "";
        row += '<option value="' + value.il_id + '">' + value.il_adi + '</option>';
        $("#il").append(row);
    });
});

$.getJSON("ilçeler.json", function (sonuc)
{
    $("#ilce").html("<option>Seçiniz</option>");
    $.each(sonuc, function (index, value)
    {
        var row = "";
        row += '<option value="' + value.ilce_id + '">' + value.il_adi + '-' + value.ilce_adi + '</option>';
        $("#ilce").append(row);
    });
});

$("#il").on("change", function ()
{
    var il = $(this).val();
    $("#ilce").html("");
    $.getJSON("https://raw.githubusercontent.com/umut79/dinamik-ililce-json/master/tr-ilce.json", function (sonuc)
    {
        $("#ilce").html("<option>Seçiniz</option>");
        $.each(sonuc, function (index, value)
        {
            var row = "";
            if (value.il_id == il)
            {
                row += '<option value="' + value.ilce_id + '">' + value.ilce_adi + '</option>';
                $("#ilce").append(row);
            }
        });
    });
});