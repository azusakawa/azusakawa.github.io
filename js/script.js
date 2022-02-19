var token = 'apiToken=4a18477a0b4e32a7edc9f0e48dd54315'
var chart_url = 'https://api.fugle.tw/realtime/v0.3/intraday/chart?symbolId='
var quote_url = 'https://api.fugle.tw/realtime/v0.3/intraday/quote?symbolId='
var meta_url = 'https://api.fugle.tw/realtime/v0.3/intraday/meta?symbolId='
var oddlot = '&oddLot=True'

var meta = setInterval(ChineseName, 1000)
var quote = setInterval(Quotations, 1000)
var chart = setInterval(Information, 1000)
var profit = setInterval(ProfitTrial, 1000)
// var pic = setInterval(StockChart, 60000)

function StockChart() {
    var apex = new ApexCharts(document.querySelector("#chart"), options);
    apex.render()
}

function ChineseName() {
    url = meta_url + document.getElementById('EnterStockID').value + '&' + token

    fetch(url)
        .then(function(response) {
            return response.json()
        })
        .then(function(result) {
            let res_n = result['data']['meta']

            document.getElementById('StockName').innerHTML = res_n['nameZhTw']
            document.getElementById('StockType').innerHTML = res_n['industryZhTw']
        }) 
}

function Information() {
    var stocktype = document.querySelector('input[name="stocktype"]:checked').value

    if (stocktype == 'all') {
        url = chart_url + document.getElementById('EnterStockID').value + '&' + token
    } else if(stocktype == 'odd') {
        url = chart_url + document.getElementById('EnterStockID').value + '&' + token + oddlot
    }

    fetch(url)
        .then(function(response) {
            return response.json()
        })
        .then(function(result) {
            let res = result['data']['chart']
            let time = res['t']

            options = {
                series: [{
                    data:[
                        {x:new Date(time[0]), y:[res['o'][0], res['h'][0], res['l'][0], res['c'][0]]},
                        {x:new Date(time[1]), y:[res['o'][1], res['h'][1], res['l'][1], res['c'][1]]},
                        {x:new Date(time[2]), y:[res['o'][2], res['h'][2], res['l'][2], res['c'][2]]},
                        {x:new Date(time[3]), y:[res['o'][3], res['h'][3], res['l'][3], res['c'][3]]},
                        {x:new Date(time[4]), y:[res['o'][4], res['h'][4], res['l'][4], res['c'][4]]},
                        {x:new Date(time[5]), y:[res['o'][5], res['h'][5], res['l'][5], res['c'][5]]},
                        {x:new Date(time[6]), y:[res['o'][6], res['h'][6], res['l'][6], res['c'][6]]},
                        {x:new Date(time[7]), y:[res['o'][7], res['h'][7], res['l'][7], res['c'][7]]},
                        {x:new Date(time[8]), y:[res['o'][8], res['h'][8], res['l'][8], res['c'][8]]},
                        {x:new Date(time[9]), y:[res['o'][9], res['h'][9], res['l'][9], res['c'][9]]},
                        {x:new Date(time[10]), y:[res['o'][10], res['h'][10], res['l'][10], res['c'][10]]},
                        {x:new Date(time[11]), y:[res['o'][11], res['h'][11], res['l'][11], res['c'][11]]},
                        {x:new Date(time[12]), y:[res['o'][12], res['h'][12], res['l'][12], res['c'][12]]},
                        {x:new Date(time[13]), y:[res['o'][13], res['h'][13], res['l'][13], res['c'][13]]},
                        {x:new Date(time[14]), y:[res['o'][14], res['h'][14], res['l'][14], res['c'][14]]},
                        {x:new Date(time[15]), y:[res['o'][15], res['h'][15], res['l'][15], res['c'][15]]},
                        {x:new Date(time[16]), y:[res['o'][16], res['h'][16], res['l'][16], res['c'][16]]},
                        {x:new Date(time[17]), y:[res['o'][17], res['h'][17], res['l'][17], res['c'][17]]},
                        {x:new Date(time[18]), y:[res['o'][18], res['h'][18], res['l'][18], res['c'][18]]},
                        {x:new Date(time[19]), y:[res['o'][19], res['h'][19], res['l'][19], res['c'][19]]},
                        {x:new Date(time[20]), y:[res['o'][20], res['h'][20], res['l'][20], res['c'][20]]},
                        {x:new Date(time[21]), y:[res['o'][21], res['h'][21], res['l'][21], res['c'][21]]},
                        {x:new Date(time[22]), y:[res['o'][22], res['h'][22], res['l'][22], res['c'][22]]},
                        {x:new Date(time[23]), y:[res['o'][23], res['h'][23], res['l'][23], res['c'][23]]},
                        {x:new Date(time[24]), y:[res['o'][24], res['h'][24], res['l'][24], res['c'][24]]},
                        {x:new Date(time[25]), y:[res['o'][25], res['h'][25], res['l'][25], res['c'][25]]},
                        {x:new Date(time[26]), y:[res['o'][26], res['h'][26], res['l'][26], res['c'][26]]},
                        {x:new Date(time[27]), y:[res['o'][27], res['h'][27], res['l'][27], res['c'][27]]},
                        {x:new Date(time[28]), y:[res['o'][28], res['h'][28], res['l'][28], res['c'][28]]},
                        {x:new Date(time[29]), y:[res['o'][29], res['h'][29], res['l'][29], res['c'][29]]},
                        {x:new Date(time[30]), y:[res['o'][30], res['h'][30], res['l'][30], res['c'][30]]},
                        {x:new Date(time[31]), y:[res['o'][31], res['h'][31], res['l'][31], res['c'][31]]},
                        {x:new Date(time[32]), y:[res['o'][32], res['h'][32], res['l'][32], res['c'][32]]},
                        {x:new Date(time[33]), y:[res['o'][33], res['h'][33], res['l'][33], res['c'][33]]},
                        {x:new Date(time[34]), y:[res['o'][34], res['h'][34], res['l'][34], res['c'][34]]},
                        {x:new Date(time[35]), y:[res['o'][35], res['h'][35], res['l'][35], res['c'][35]]},
                        {x:new Date(time[36]), y:[res['o'][36], res['h'][36], res['l'][36], res['c'][36]]},
                        {x:new Date(time[37]), y:[res['o'][37], res['h'][37], res['l'][37], res['c'][37]]},
                        {x:new Date(time[38]), y:[res['o'][38], res['h'][38], res['l'][38], res['c'][38]]},
                        {x:new Date(time[39]), y:[res['o'][39], res['h'][39], res['l'][39], res['c'][39]]},
                        {x:new Date(time[40]), y:[res['o'][40], res['h'][40], res['l'][40], res['c'][40]]},
                        {x:new Date(time[41]), y:[res['o'][41], res['h'][41], res['l'][41], res['c'][41]]},
                        {x:new Date(time[42]), y:[res['o'][42], res['h'][42], res['l'][42], res['c'][42]]},
                        {x:new Date(time[43]), y:[res['o'][43], res['h'][43], res['l'][43], res['c'][43]]},
                        {x:new Date(time[44]), y:[res['o'][44], res['h'][44], res['l'][44], res['c'][44]]},
                        {x:new Date(time[45]), y:[res['o'][45], res['h'][45], res['l'][45], res['c'][45]]},
                        {x:new Date(time[46]), y:[res['o'][46], res['h'][46], res['l'][46], res['c'][46]]},
                        {x:new Date(time[47]), y:[res['o'][47], res['h'][47], res['l'][47], res['c'][47]]},
                        {x:new Date(time[48]), y:[res['o'][48], res['h'][48], res['l'][48], res['c'][48]]},
                        {x:new Date(time[49]), y:[res['o'][49], res['h'][49], res['l'][49], res['c'][49]]},
                        {x:new Date(time[50]), y:[res['o'][50], res['h'][50], res['l'][50], res['c'][50]]},
                        {x:new Date(time[51]), y:[res['o'][51], res['h'][51], res['l'][51], res['c'][51]]},
                        {x:new Date(time[52]), y:[res['o'][52], res['h'][52], res['l'][52], res['c'][52]]},
                        {x:new Date(time[53]), y:[res['o'][53], res['h'][53], res['l'][53], res['c'][53]]},
                        {x:new Date(time[54]), y:[res['o'][54], res['h'][54], res['l'][54], res['c'][54]]},
                        {x:new Date(time[55]), y:[res['o'][55], res['h'][55], res['l'][55], res['c'][55]]},
                        {x:new Date(time[56]), y:[res['o'][56], res['h'][56], res['l'][56], res['c'][56]]},
                        {x:new Date(time[57]), y:[res['o'][57], res['h'][57], res['l'][57], res['c'][57]]},
                        {x:new Date(time[58]), y:[res['o'][58], res['h'][58], res['l'][58], res['c'][58]]},
                        {x:new Date(time[59]), y:[res['o'][59], res['h'][59], res['l'][59], res['c'][59]]},
                        {x:new Date(time[60]), y:[res['o'][60], res['h'][60], res['l'][60], res['c'][60]]},
                        {x:new Date(time[61]), y:[res['o'][61], res['h'][61], res['l'][61], res['c'][61]]},
                        {x:new Date(time[62]), y:[res['o'][62], res['h'][62], res['l'][62], res['c'][62]]},
                        {x:new Date(time[63]), y:[res['o'][63], res['h'][63], res['l'][63], res['c'][63]]},
                        {x:new Date(time[64]), y:[res['o'][64], res['h'][64], res['l'][64], res['c'][64]]},
                        {x:new Date(time[65]), y:[res['o'][65], res['h'][65], res['l'][65], res['c'][65]]},
                        {x:new Date(time[66]), y:[res['o'][66], res['h'][66], res['l'][66], res['c'][66]]},
                        {x:new Date(time[67]), y:[res['o'][67], res['h'][67], res['l'][67], res['c'][67]]},
                        {x:new Date(time[68]), y:[res['o'][68], res['h'][68], res['l'][68], res['c'][68]]},
                        {x:new Date(time[69]), y:[res['o'][69], res['h'][69], res['l'][69], res['c'][69]]},
                        {x:new Date(time[70]), y:[res['o'][70], res['h'][70], res['l'][70], res['c'][70]]},
                        {x:new Date(time[71]), y:[res['o'][71], res['h'][71], res['l'][71], res['c'][71]]},
                        {x:new Date(time[72]), y:[res['o'][72], res['h'][72], res['l'][72], res['c'][72]]},
                        {x:new Date(time[73]), y:[res['o'][73], res['h'][73], res['l'][73], res['c'][73]]},
                        {x:new Date(time[74]), y:[res['o'][74], res['h'][74], res['l'][74], res['c'][74]]},
                        {x:new Date(time[75]), y:[res['o'][75], res['h'][75], res['l'][75], res['c'][75]]},
                        {x:new Date(time[76]), y:[res['o'][76], res['h'][76], res['l'][76], res['c'][76]]},
                        {x:new Date(time[77]), y:[res['o'][77], res['h'][77], res['l'][77], res['c'][77]]},
                        {x:new Date(time[78]), y:[res['o'][78], res['h'][78], res['l'][78], res['c'][78]]},
                        {x:new Date(time[79]), y:[res['o'][79], res['h'][79], res['l'][79], res['c'][79]]},
                        {x:new Date(time[80]), y:[res['o'][80], res['h'][80], res['l'][80], res['c'][80]]},
                        {x:new Date(time[81]), y:[res['o'][81], res['h'][81], res['l'][81], res['c'][81]]},
                        {x:new Date(time[82]), y:[res['o'][82], res['h'][82], res['l'][82], res['c'][82]]},
                        {x:new Date(time[83]), y:[res['o'][83], res['h'][83], res['l'][83], res['c'][83]]},
                        {x:new Date(time[84]), y:[res['o'][84], res['h'][84], res['l'][84], res['c'][84]]},
                        {x:new Date(time[85]), y:[res['o'][85], res['h'][85], res['l'][85], res['c'][85]]},
                        {x:new Date(time[86]), y:[res['o'][86], res['h'][86], res['l'][86], res['c'][86]]},
                        {x:new Date(time[87]), y:[res['o'][87], res['h'][87], res['l'][87], res['c'][87]]},
                        {x:new Date(time[88]), y:[res['o'][88], res['h'][88], res['l'][88], res['c'][88]]},
                        {x:new Date(time[89]), y:[res['o'][89], res['h'][89], res['l'][89], res['c'][89]]},
                        {x:new Date(time[90]), y:[res['o'][90], res['h'][90], res['l'][90], res['c'][90]]},
                        {x:new Date(time[91]), y:[res['o'][91], res['h'][91], res['l'][91], res['c'][91]]},
                        {x:new Date(time[92]), y:[res['o'][92], res['h'][92], res['l'][92], res['c'][92]]},
                        {x:new Date(time[93]), y:[res['o'][93], res['h'][93], res['l'][93], res['c'][93]]},
                        {x:new Date(time[94]), y:[res['o'][94], res['h'][94], res['l'][94], res['c'][94]]},
                        {x:new Date(time[95]), y:[res['o'][95], res['h'][95], res['l'][95], res['c'][95]]},
                        {x:new Date(time[96]), y:[res['o'][96], res['h'][96], res['l'][96], res['c'][96]]},
                        {x:new Date(time[97]), y:[res['o'][97], res['h'][97], res['l'][97], res['c'][97]]},
                        {x:new Date(time[98]), y:[res['o'][98], res['h'][98], res['l'][98], res['c'][98]]},
                        {x:new Date(time[99]), y:[res['o'][99], res['h'][99], res['l'][99], res['c'][99]]},
                        {x:new Date(time[100]), y:[res['o'][100], res['h'][100], res['l'][100], res['c'][100]]},
                        {x:new Date(time[101]), y:[res['o'][101], res['h'][101], res['l'][101], res['c'][101]]},
                        {x:new Date(time[102]), y:[res['o'][102], res['h'][102], res['l'][102], res['c'][102]]},
                        {x:new Date(time[103]), y:[res['o'][103], res['h'][103], res['l'][103], res['c'][103]]},
                        {x:new Date(time[104]), y:[res['o'][104], res['h'][104], res['l'][104], res['c'][104]]},
                        {x:new Date(time[105]), y:[res['o'][105], res['h'][105], res['l'][105], res['c'][105]]},
                        {x:new Date(time[106]), y:[res['o'][106], res['h'][106], res['l'][106], res['c'][106]]},
                        {x:new Date(time[107]), y:[res['o'][107], res['h'][107], res['l'][107], res['c'][107]]},
                        {x:new Date(time[108]), y:[res['o'][108], res['h'][108], res['l'][108], res['c'][108]]},
                        {x:new Date(time[109]), y:[res['o'][109], res['h'][109], res['l'][109], res['c'][109]]},
                        {x:new Date(time[110]), y:[res['o'][110], res['h'][110], res['l'][110], res['c'][110]]},
                        {x:new Date(time[111]), y:[res['o'][111], res['h'][111], res['l'][111], res['c'][111]]},
                        {x:new Date(time[112]), y:[res['o'][112], res['h'][112], res['l'][112], res['c'][112]]},
                        {x:new Date(time[113]), y:[res['o'][113], res['h'][113], res['l'][113], res['c'][113]]},
                        {x:new Date(time[114]), y:[res['o'][114], res['h'][114], res['l'][114], res['c'][114]]},
                        {x:new Date(time[115]), y:[res['o'][115], res['h'][115], res['l'][115], res['c'][115]]},
                        {x:new Date(time[116]), y:[res['o'][116], res['h'][116], res['l'][116], res['c'][116]]},
                        {x:new Date(time[117]), y:[res['o'][117], res['h'][117], res['l'][117], res['c'][117]]},
                        {x:new Date(time[118]), y:[res['o'][118], res['h'][118], res['l'][118], res['c'][118]]},
                        {x:new Date(time[119]), y:[res['o'][119], res['h'][119], res['l'][119], res['c'][119]]},
                        {x:new Date(time[120]), y:[res['o'][120], res['h'][120], res['l'][120], res['c'][120]]},
                        {x:new Date(time[121]), y:[res['o'][121], res['h'][121], res['l'][121], res['c'][121]]},
                        {x:new Date(time[122]), y:[res['o'][122], res['h'][122], res['l'][122], res['c'][122]]},
                        {x:new Date(time[123]), y:[res['o'][123], res['h'][123], res['l'][123], res['c'][123]]},
                        {x:new Date(time[124]), y:[res['o'][124], res['h'][124], res['l'][124], res['c'][124]]},
                        {x:new Date(time[125]), y:[res['o'][125], res['h'][125], res['l'][125], res['c'][125]]},
                        {x:new Date(time[126]), y:[res['o'][126], res['h'][126], res['l'][126], res['c'][126]]},
                        {x:new Date(time[127]), y:[res['o'][127], res['h'][127], res['l'][127], res['c'][127]]},
                        {x:new Date(time[128]), y:[res['o'][128], res['h'][128], res['l'][128], res['c'][128]]},
                        {x:new Date(time[129]), y:[res['o'][129], res['h'][129], res['l'][129], res['c'][129]]},
                        {x:new Date(time[130]), y:[res['o'][130], res['h'][130], res['l'][130], res['c'][130]]},
                        {x:new Date(time[131]), y:[res['o'][131], res['h'][131], res['l'][131], res['c'][131]]},
                        {x:new Date(time[132]), y:[res['o'][132], res['h'][132], res['l'][132], res['c'][132]]},
                        {x:new Date(time[133]), y:[res['o'][133], res['h'][133], res['l'][133], res['c'][133]]},
                        {x:new Date(time[134]), y:[res['o'][134], res['h'][134], res['l'][134], res['c'][134]]},
                        {x:new Date(time[135]), y:[res['o'][135], res['h'][135], res['l'][135], res['c'][135]]},
                        {x:new Date(time[136]), y:[res['o'][136], res['h'][136], res['l'][136], res['c'][136]]},
                        {x:new Date(time[137]), y:[res['o'][137], res['h'][137], res['l'][137], res['c'][137]]},
                        {x:new Date(time[138]), y:[res['o'][138], res['h'][138], res['l'][138], res['c'][138]]},
                        {x:new Date(time[139]), y:[res['o'][139], res['h'][139], res['l'][139], res['c'][139]]},
                        {x:new Date(time[130]), y:[res['o'][130], res['h'][130], res['l'][130], res['c'][130]]},
                        {x:new Date(time[141]), y:[res['o'][141], res['h'][141], res['l'][141], res['c'][141]]},
                        {x:new Date(time[142]), y:[res['o'][142], res['h'][142], res['l'][142], res['c'][142]]},
                        {x:new Date(time[143]), y:[res['o'][143], res['h'][143], res['l'][143], res['c'][143]]},
                        {x:new Date(time[144]), y:[res['o'][144], res['h'][144], res['l'][144], res['c'][144]]},
                        {x:new Date(time[145]), y:[res['o'][145], res['h'][145], res['l'][145], res['c'][145]]},
                        {x:new Date(time[146]), y:[res['o'][146], res['h'][146], res['l'][146], res['c'][146]]},
                        {x:new Date(time[147]), y:[res['o'][147], res['h'][147], res['l'][147], res['c'][147]]},
                        {x:new Date(time[148]), y:[res['o'][148], res['h'][148], res['l'][148], res['c'][148]]},
                        {x:new Date(time[149]), y:[res['o'][149], res['h'][149], res['l'][149], res['c'][149]]},
                        {x:new Date(time[150]), y:[res['o'][150], res['h'][150], res['l'][150], res['c'][150]]},
                        {x:new Date(time[151]), y:[res['o'][151], res['h'][151], res['l'][151], res['c'][151]]},
                        {x:new Date(time[152]), y:[res['o'][152], res['h'][152], res['l'][152], res['c'][152]]},
                        {x:new Date(time[153]), y:[res['o'][153], res['h'][153], res['l'][153], res['c'][153]]},
                        {x:new Date(time[154]), y:[res['o'][154], res['h'][154], res['l'][154], res['c'][154]]},
                        {x:new Date(time[155]), y:[res['o'][155], res['h'][155], res['l'][155], res['c'][155]]},
                        {x:new Date(time[156]), y:[res['o'][156], res['h'][156], res['l'][156], res['c'][156]]},
                        {x:new Date(time[157]), y:[res['o'][157], res['h'][157], res['l'][157], res['c'][157]]},
                        {x:new Date(time[158]), y:[res['o'][158], res['h'][158], res['l'][158], res['c'][158]]},
                        {x:new Date(time[159]), y:[res['o'][159], res['h'][159], res['l'][159], res['c'][159]]},
                        {x:new Date(time[160]), y:[res['o'][160], res['h'][160], res['l'][160], res['c'][160]]},
                        {x:new Date(time[161]), y:[res['o'][161], res['h'][161], res['l'][161], res['c'][161]]},
                        {x:new Date(time[162]), y:[res['o'][162], res['h'][162], res['l'][162], res['c'][162]]},
                        {x:new Date(time[163]), y:[res['o'][163], res['h'][163], res['l'][163], res['c'][163]]},
                        {x:new Date(time[164]), y:[res['o'][164], res['h'][164], res['l'][164], res['c'][164]]},
                        {x:new Date(time[165]), y:[res['o'][165], res['h'][165], res['l'][165], res['c'][165]]},
                        {x:new Date(time[166]), y:[res['o'][166], res['h'][166], res['l'][166], res['c'][166]]},
                        {x:new Date(time[167]), y:[res['o'][167], res['h'][167], res['l'][167], res['c'][167]]},
                        {x:new Date(time[168]), y:[res['o'][168], res['h'][168], res['l'][168], res['c'][168]]},
                        {x:new Date(time[169]), y:[res['o'][169], res['h'][169], res['l'][169], res['c'][169]]},
                        {x:new Date(time[170]), y:[res['o'][170], res['h'][170], res['l'][170], res['c'][170]]},
                        {x:new Date(time[171]), y:[res['o'][171], res['h'][171], res['l'][171], res['c'][171]]},
                        {x:new Date(time[172]), y:[res['o'][172], res['h'][172], res['l'][172], res['c'][172]]},
                        {x:new Date(time[173]), y:[res['o'][173], res['h'][173], res['l'][173], res['c'][173]]},
                        {x:new Date(time[174]), y:[res['o'][174], res['h'][174], res['l'][174], res['c'][174]]},
                        {x:new Date(time[175]), y:[res['o'][175], res['h'][175], res['l'][175], res['c'][175]]},
                        {x:new Date(time[176]), y:[res['o'][176], res['h'][176], res['l'][176], res['c'][176]]},
                        {x:new Date(time[177]), y:[res['o'][177], res['h'][177], res['l'][177], res['c'][177]]},
                        {x:new Date(time[178]), y:[res['o'][178], res['h'][178], res['l'][178], res['c'][178]]},
                        {x:new Date(time[179]), y:[res['o'][179], res['h'][179], res['l'][179], res['c'][179]]},
                        {x:new Date(time[180]), y:[res['o'][180], res['h'][180], res['l'][180], res['c'][180]]},
                        {x:new Date(time[181]), y:[res['o'][181], res['h'][181], res['l'][181], res['c'][181]]},
                        {x:new Date(time[182]), y:[res['o'][182], res['h'][182], res['l'][182], res['c'][182]]},
                        {x:new Date(time[183]), y:[res['o'][183], res['h'][183], res['l'][183], res['c'][183]]},
                        {x:new Date(time[184]), y:[res['o'][184], res['h'][184], res['l'][184], res['c'][184]]},
                        {x:new Date(time[185]), y:[res['o'][185], res['h'][185], res['l'][185], res['c'][185]]},
                        {x:new Date(time[186]), y:[res['o'][186], res['h'][186], res['l'][186], res['c'][186]]},
                        {x:new Date(time[187]), y:[res['o'][187], res['h'][187], res['l'][187], res['c'][187]]},
                        {x:new Date(time[188]), y:[res['o'][188], res['h'][188], res['l'][188], res['c'][188]]},
                        {x:new Date(time[189]), y:[res['o'][189], res['h'][189], res['l'][189], res['c'][189]]},
                        {x:new Date(time[190]), y:[res['o'][190], res['h'][190], res['l'][190], res['c'][190]]},
                        {x:new Date(time[191]), y:[res['o'][191], res['h'][191], res['l'][191], res['c'][191]]},
                        {x:new Date(time[192]), y:[res['o'][192], res['h'][192], res['l'][192], res['c'][192]]},
                        {x:new Date(time[193]), y:[res['o'][193], res['h'][193], res['l'][193], res['c'][193]]},
                        {x:new Date(time[194]), y:[res['o'][194], res['h'][194], res['l'][194], res['c'][194]]},
                        {x:new Date(time[195]), y:[res['o'][195], res['h'][195], res['l'][195], res['c'][195]]},
                        {x:new Date(time[196]), y:[res['o'][196], res['h'][196], res['l'][196], res['c'][196]]},
                        {x:new Date(time[197]), y:[res['o'][197], res['h'][197], res['l'][197], res['c'][197]]},
                        {x:new Date(time[198]), y:[res['o'][198], res['h'][198], res['l'][198], res['c'][198]]},
                        {x:new Date(time[199]), y:[res['o'][199], res['h'][199], res['l'][199], res['c'][199]]},
                        {x:new Date(time[200]), y:[res['o'][200], res['h'][200], res['l'][200], res['c'][200]]},
                        {x:new Date(time[201]), y:[res['o'][201], res['h'][201], res['l'][201], res['c'][201]]},
                        {x:new Date(time[202]), y:[res['o'][202], res['h'][202], res['l'][202], res['c'][202]]},
                        {x:new Date(time[203]), y:[res['o'][203], res['h'][203], res['l'][203], res['c'][203]]},
                        {x:new Date(time[204]), y:[res['o'][204], res['h'][204], res['l'][204], res['c'][204]]},
                        {x:new Date(time[205]), y:[res['o'][205], res['h'][205], res['l'][205], res['c'][205]]},
                        {x:new Date(time[206]), y:[res['o'][206], res['h'][206], res['l'][206], res['c'][206]]},
                        {x:new Date(time[207]), y:[res['o'][207], res['h'][207], res['l'][207], res['c'][207]]},
                        {x:new Date(time[208]), y:[res['o'][208], res['h'][208], res['l'][208], res['c'][208]]},
                        {x:new Date(time[209]), y:[res['o'][209], res['h'][209], res['l'][209], res['c'][209]]},
                        {x:new Date(time[210]), y:[res['o'][210], res['h'][210], res['l'][210], res['c'][210]]},
                        {x:new Date(time[211]), y:[res['o'][211], res['h'][211], res['l'][211], res['c'][211]]},
                        {x:new Date(time[212]), y:[res['o'][212], res['h'][212], res['l'][212], res['c'][212]]},
                        {x:new Date(time[213]), y:[res['o'][213], res['h'][213], res['l'][213], res['c'][213]]},
                        {x:new Date(time[214]), y:[res['o'][214], res['h'][214], res['l'][214], res['c'][214]]},
                        {x:new Date(time[215]), y:[res['o'][215], res['h'][215], res['l'][215], res['c'][215]]},
                        {x:new Date(time[216]), y:[res['o'][216], res['h'][216], res['l'][216], res['c'][216]]},
                        {x:new Date(time[217]), y:[res['o'][217], res['h'][217], res['l'][217], res['c'][217]]},
                        {x:new Date(time[218]), y:[res['o'][218], res['h'][218], res['l'][218], res['c'][218]]},
                        {x:new Date(time[219]), y:[res['o'][219], res['h'][219], res['l'][219], res['c'][219]]},
                        {x:new Date(time[220]), y:[res['o'][220], res['h'][220], res['l'][220], res['c'][220]]},
                        {x:new Date(time[221]), y:[res['o'][221], res['h'][221], res['l'][221], res['c'][221]]},
                        {x:new Date(time[222]), y:[res['o'][222], res['h'][222], res['l'][222], res['c'][222]]},
                        {x:new Date(time[223]), y:[res['o'][223], res['h'][223], res['l'][223], res['c'][223]]},
                        {x:new Date(time[224]), y:[res['o'][224], res['h'][224], res['l'][224], res['c'][224]]},
                        {x:new Date(time[225]), y:[res['o'][225], res['h'][225], res['l'][225], res['c'][225]]},
                        {x:new Date(time[226]), y:[res['o'][226], res['h'][226], res['l'][226], res['c'][226]]},
                        {x:new Date(time[227]), y:[res['o'][227], res['h'][227], res['l'][227], res['c'][227]]},
                        {x:new Date(time[228]), y:[res['o'][228], res['h'][228], res['l'][228], res['c'][228]]},
                        {x:new Date(time[229]), y:[res['o'][229], res['h'][229], res['l'][229], res['c'][229]]},
                        {x:new Date(time[230]), y:[res['o'][230], res['h'][230], res['l'][230], res['c'][230]]},
                        {x:new Date(time[231]), y:[res['o'][231], res['h'][231], res['l'][231], res['c'][231]]},
                        {x:new Date(time[232]), y:[res['o'][232], res['h'][232], res['l'][232], res['c'][232]]},
                        {x:new Date(time[233]), y:[res['o'][233], res['h'][233], res['l'][233], res['c'][233]]},
                        {x:new Date(time[234]), y:[res['o'][234], res['h'][234], res['l'][234], res['c'][234]]},
                        {x:new Date(time[235]), y:[res['o'][235], res['h'][235], res['l'][235], res['c'][235]]},
                        {x:new Date(time[236]), y:[res['o'][236], res['h'][236], res['l'][236], res['c'][236]]},
                        {x:new Date(time[237]), y:[res['o'][237], res['h'][237], res['l'][237], res['c'][237]]},
                        {x:new Date(time[238]), y:[res['o'][238], res['h'][238], res['l'][238], res['c'][238]]},
                        {x:new Date(time[239]), y:[res['o'][239], res['h'][239], res['l'][239], res['c'][239]]},
                        {x:new Date(time[240]), y:[res['o'][240], res['h'][240], res['l'][240], res['c'][240]]},
                        {x:new Date(time[241]), y:[res['o'][241], res['h'][241], res['l'][241], res['c'][241]]},
                        {x:new Date(time[242]), y:[res['o'][242], res['h'][242], res['l'][242], res['c'][242]]},
                        {x:new Date(time[243]), y:[res['o'][243], res['h'][243], res['l'][243], res['c'][243]]},
                        {x:new Date(time[244]), y:[res['o'][244], res['h'][244], res['l'][244], res['c'][244]]},
                        {x:new Date(time[245]), y:[res['o'][245], res['h'][245], res['l'][245], res['c'][245]]},
                        {x:new Date(time[246]), y:[res['o'][246], res['h'][246], res['l'][246], res['c'][246]]},
                        {x:new Date(time[247]), y:[res['o'][247], res['h'][247], res['l'][247], res['c'][247]]},
                        {x:new Date(time[248]), y:[res['o'][248], res['h'][248], res['l'][248], res['c'][248]]},
                        {x:new Date(time[249]), y:[res['o'][249], res['h'][249], res['l'][249], res['c'][249]]},
                        {x:new Date(time[250]), y:[res['o'][250], res['h'][250], res['l'][250], res['c'][250]]},
                        {x:new Date(time[251]), y:[res['o'][251], res['h'][251], res['l'][251], res['c'][251]]},
                        {x:new Date(time[252]), y:[res['o'][252], res['h'][252], res['l'][252], res['c'][252]]},
                        {x:new Date(time[253]), y:[res['o'][253], res['h'][253], res['l'][253], res['c'][253]]},
                        {x:new Date(time[254]), y:[res['o'][254], res['h'][254], res['l'][254], res['c'][254]]},
                        {x:new Date(time[255]), y:[res['o'][255], res['h'][255], res['l'][255], res['c'][255]]},
                        {x:new Date(time[256]), y:[res['o'][256], res['h'][256], res['l'][256], res['c'][256]]},
                        {x:new Date(time[257]), y:[res['o'][257], res['h'][257], res['l'][257], res['c'][257]]},
                        {x:new Date(time[258]), y:[res['o'][258], res['h'][258], res['l'][258], res['c'][258]]},
                        {x:new Date(time[259]), y:[res['o'][259], res['h'][259], res['l'][259], res['c'][259]]},
                        {x:new Date(time[260]), y:[res['o'][260], res['h'][260], res['l'][260], res['c'][260]]},
                        {x:new Date(time[261]), y:[res['o'][261], res['h'][261], res['l'][261], res['c'][261]]},
                        {x:new Date(time[262]), y:[res['o'][262], res['h'][262], res['l'][262], res['c'][262]]},
                        {x:new Date(time[263]), y:[res['o'][263], res['h'][263], res['l'][263], res['c'][263]]},
                        {x:new Date(time[264]), y:[res['o'][264], res['h'][264], res['l'][264], res['c'][264]]},
                        {x:new Date(time[265]), y:[res['o'][265], res['h'][265], res['l'][265], res['c'][265]]},
                    ]
                }],
                chart: {
                    type: 'candlestick',
                    height: 500
                },
                tooltip: {
                    enabled: true,
                },
                xaxis: {
                    type: 'datetime',
                    labels: {
                        datetimeUTC: false
                    }
                },
                yaxis: {
                    tooltip: {
                        enabled: true
                    }
                }
            };
        }) 
}

function Quotations() {
    let stocktype = document.querySelector('input[name="stocktype"]:checked').value

    if (stocktype == 'all') {
        url = quote_url + document.getElementById('EnterStockID').value + '&' + token
    } else if(stocktype == 'odd') {
        url = quote_url + document.getElementById('EnterStockID').value + '&' + token + oddlot
    }

    fetch(url)
        .then(function(response) {
            return response.json()
        })
        .then(function(result) {
            let res_p = result['data']['quote']
            let res = result['data']['quote']['order']

            document.getElementById('price_H').innerHTML = res_p['priceHigh']['price']
            document.getElementById('price_L').innerHTML = res_p['priceLow']['price']
            document.getElementById('price_O').innerHTML = res_p['priceOpen']['price']
            document.getElementById('price_A').innerHTML = res_p['priceAvg']['price']

            document.getElementById('sell_v1').innerHTML = res['bids'][0]['volume']
            document.getElementById('sell_p1').innerHTML = res['bids'][0]['price']
            document.getElementById('buy_p1').innerHTML = res['asks'][0]['price']
            document.getElementById('buy_v1').innerHTML = res['asks'][0]['volume']

            document.getElementById('sell_v2').innerHTML = res['bids'][1]['volume']
            document.getElementById('sell_p2').innerHTML = res['bids'][1]['price']
            document.getElementById('buy_p2').innerHTML = res['asks'][1]['price']
            document.getElementById('buy_v2').innerHTML = res['asks'][1]['volume']

            document.getElementById('sell_v3').innerHTML = res['bids'][2]['volume']
            document.getElementById('sell_p3').innerHTML = res['bids'][2]['price']
            document.getElementById('buy_p3').innerHTML = res['asks'][2]['price']
            document.getElementById('buy_v3').innerHTML = res['asks'][2]['volume']

            document.getElementById('sell_v4').innerHTML = res['bids'][3]['volume']
            document.getElementById('sell_p4').innerHTML = res['bids'][3]['price']
            document.getElementById('buy_p4').innerHTML = res['asks'][3]['price']
            document.getElementById('buy_v4').innerHTML = res['asks'][3]['volume']

            document.getElementById('sell_v5').innerHTML = res['bids'][4]['volume']
            document.getElementById('sell_p5').innerHTML = res['bids'][4]['price']
            document.getElementById('buy_p5').innerHTML = res['asks'][4]['price']
            document.getElementById('buy_v5').innerHTML = res['asks'][4]['volume']
        })
}

function ProfitTrial() {
    url = quote_url + document.getElementById('EnterStockID').value + '&' + token

    fetch(url)
        .then(function(response) {
            return response.json()
        })
        .then(function(result) {
            let res = result['data']['quote']['order']
            let num = document.getElementById('EnterBuyNum').value
            let price = document.getElementById('EnterBuyPrice').value
            let new_num = num * 1000
            document.getElementById('test1').innerHTML = res['bids'][0]['price'] * new_num
            document.getElementById('test2').innerHTML = res['bids'][0]['price'] * new_num * 0.001425
            document.getElementById('test3').innerHTML = price

            document.getElementById('sell_n1').innerHTML = res['bids'][0]['price']
            document.getElementById('sell_n2').innerHTML = res['bids'][1]['price']
            document.getElementById('sell_n3').innerHTML = res['bids'][2]['price']
            document.getElementById('sell_n4').innerHTML = res['bids'][3]['price']
            document.getElementById('sell_n5').innerHTML = res['bids'][4]['price']

            document.getElementById('buy_n1').innerHTML = res['asks'][0]['price']
            document.getElementById('buy_n2').innerHTML = res['asks'][1]['price']
            document.getElementById('buy_n3').innerHTML = res['asks'][2]['price']
            document.getElementById('buy_n4').innerHTML = res['asks'][3]['price']
            document.getElementById('buy_n5').innerHTML = res['asks'][4]['price']

            document.getElementById('sell_b1').innerHTML = (res['bids'][0]['price'] * new_num) - TwoFloat((res['bids'][0]['price'] * new_num * 0.001425)) - TwoFloat((res['bids'][0]['price'] * new_num * 0.0015)) - (price * new_num + TwoFloat((price * new_num * 0.001425)))
            document.getElementById('sell_b2').innerHTML = res['bids'][1]['price']
            document.getElementById('sell_b3').innerHTML = res['bids'][2]['price']
            document.getElementById('sell_b4').innerHTML = res['bids'][3]['price']
            document.getElementById('sell_b5').innerHTML = res['bids'][4]['price']
            
            document.getElementById('buy_b1').innerHTML = res['asks'][0]['price']
            document.getElementById('buy_b2').innerHTML = res['asks'][1]['price']
            document.getElementById('buy_b3').innerHTML = res['asks'][2]['price']
            document.getElementById('buy_b4').innerHTML = res['asks'][3]['price']
            document.getElementById('buy_b5').innerHTML = res['asks'][4]['price']   
        })
}