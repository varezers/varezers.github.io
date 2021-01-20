/*!
 * Rodinal, Stop solution and fixing agent calculators for analog photography
 * rodiynal.js v1.0.0
 *
 * //varezers.org/rodiynal
 *
 * Relies on jQuery
 * https://jquery.com/
 *
 * Released under the CC0
 * https://creativecommons.org/publicdomain/zero/1.0/
 *
 * Date: 2019-02-20
 */

/** calculate rodinal from needed volume */
function calc_rodiynal($amount){

    // let's avoid spamming variables. It's not yet the time to use let in functions
    var $rodinal = new Object();

    // base to begin with, usually 4/5 of total amount
    $rodinal.base = Math.round($amount * 0.8);
    $rodinal.base_extra = Math.round($amount * 0.2);

    // 12% of total
    $rodinal.acetominophen_tablets = ($amount * 0.12).toFixed(1);
    $rodinal.acetominophen_g = Math.round($amount * 500 / 1000 * 0.12);

    // 20% of total
    $rodinal.sodium_sulfite = Math.round($amount * 0.2);

    // 8% of total
    $rodinal.sodium_hydroxide = Math.round($amount * 0.08);

    $('.rodinal_water').text($rodinal.base + 'ml');
    $('.rodinal_water_extra').text($rodinal.base_extra + 'ml');
    $('.rodinal_acetominophen').text($rodinal.acetominophen_g + 'g ' + '(' + $rodinal.acetominophen_tablets + ' tablets)');
    $('.rodinal_acetominophen_tablets').text($rodinal.acetominophen_tablets + ' tablets');
    $('.rodinal_sodium_sulfite').text($rodinal.sodium_sulfite + 'g');
    $('.rodinal_sodium_hydroxide').text($rodinal.sodium_hydroxide + 'g');
}

/** input concentration in % to calculate molarity */
function calc_molarity($concentration) {
    var molarity = $concentration / 100;
    return molarity;
}

/** calculate stop bath */
function calc_stop($amount, $vinegar_percent) {
    var $stop = new Object();
    $stop.amount = $amount;
    $stop.molarity = 0.02; // molarity desired for stop bath
    var $vinegar_molarity = calc_molarity($vinegar_percent);

    var $vinegar_needed = $stop.molarity * $stop.amount / $vinegar_molarity;
    var $vinegar_needed = Math.round($vinegar_needed);

    var $water_needed = $amount - $vinegar_needed;
    var $water_needed = Math.round($water_needed);

    $('.stop_water').text($water_needed + 'ml');
    $('.stop_vinegar').text($vinegar_needed + 'ml');
}

/** calculate fixer */
function calc_fixer($amount){
    var $fixer = new Object();

    var $water_base_percent = 0.75;
    var $sodium_thiosulfate_percent = 0.25;
    var $sodium_sulfite_percent = 0.05;

    $fixer.water = $amount * $water_base_percent;
    $fixer.thiosulfate = $amount * $sodium_thiosulfate_percent;
    $fixer.sodium_sulfite = $amount * $sodium_sulfite_percent;

    $fixer.water = Math.round($fixer.water);
    $fixer.thiosulfate = Math.round($fixer.thiosulfate);
    $fixer.sodium_sulfite = Math.round($fixer.sodium_sulfite);

    $('.fixer_water').text($fixer.water + 'ml');
    $('.fixer_thiosulfate').text($fixer.thiosulfate + 'g');
    $('.fixer_sodium_sulfite').text($fixer.sodium_sulfite + 'g');
    $('.fixer_volume').text($amount + 'ml');
}

$(document).ready(function(){

    $('#amount_rodinal').change(function(){
        var $amount_rodinal = $('#amount_rodinal').val();

        calc_rodiynal($amount_rodinal);
    });

    $('#amount_stop, #vinegar_percent').change(function(){
        var $amount = $('#amount_stop').val();
        var $vinegar_percent = $('#vinegar_percent').val();

        calc_stop($amount, $vinegar_percent);
    });

    $('#amount_fixer').change(function(){
        var $amount_fixer = $('#amount_fixer').val();

        calc_fixer($amount_fixer);
    });

    // init change to launch calculators
    $('#amount_rodinal, #amount_stop, #vinegar_percent, #amount_fixer').change();
});
