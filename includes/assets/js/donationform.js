$(document).ready(function(){function o(){for(var o,n=[],e=window.location.href.split("#")[0].slice(window.location.href.indexOf("?")+1).split("&"),i=0;i<e.length;i++)o=e[i].split("="),n.push(o[0]),n[o[0]]=o[1];return n}let n=o().clangct;null!=n&&$.ajax({url:"/wp-content/plugins/planet4-gpnl-plugin-blocks/includes/assets/js/clang-landing.js?clangct="+n,dataType:"script"});var e={suggested_frequency:o().per,marketingcode:o().mcode,literatuurcode:o().lcode,drplus:o().drplus,min_amount:o().min};$.each(e,function(o,n){if(void 0!==n)switch(o){case"suggested_frequency":switch(n){case"E":formconfig.allow_frequency_override="false",formconfig.suggested_frequency=["E","Eenmalig"];break;case"M":formconfig.allow_frequency_override="false",formconfig.suggested_frequency=["M","Maandelijks"];break;default:formconfig.suggested_frequency=["M","Maandelijks"]}break;case"marketingcode":if("E"===formconfig.suggested_frequency[0]){formconfig["marketingcode_oneoff"]=n}else{formconfig["marketingcode_recurring"]=n}break;case"drplus":"true"===n&&("E"===formconfig.suggested_frequency[0]?(formconfig.oneoff_amount1=formconfig.drplus_amount1,formconfig.oneoff_amount2=formconfig.drplus_amount2,formconfig.oneoff_amount3=formconfig.drplus_amount3):(formconfig.recurring_amount1=formconfig.drplus_amount1,formconfig.recurring_amount2=formconfig.drplus_amount2,formconfig.recurring_amount3=formconfig.drplus_amount3));break;case"min_amount":formconfig.min_amount=n;break;case"literatuurcode":formconfig.literatuurcode=n}}),Vue.use(window.vuelidate.default);const{required:i,between:t,minLength:a,maxLength:r,email:l,numeric:s,alphaNum:p,requiredUnless:u}=window.validators;Vue.use(VueFormWizard),Vue.config.devtools=!0,Vue.component("step1",{template:'\n        <div>\n          <div class="form-group" v-bind:class="{ \'has-error\': $v.machtigingType }">\n            <label for="machtigingType" v-if="formconfig.allow_frequency_override == \'true\'">Ja ik steun Greenpeace:</label>\n            <label for="machtigingType" v-else>\n              Ja ik steun Greenpeace <strong>{{ formconfig.suggested_frequency[1] }}</strong>:\n            </label>\n            \n            <select id="machtigingType" class="form-control" v-model.trim="machtigingType" @input="$v.machtigingType.$touch()" v-show="formconfig.allow_frequency_override == \'true\'" v-on:change="changePeriodic">\n              <option value="E">Eenmalig</option>\n              <option value="M">Maandelijks</option>\n            </select>\n            <span class="help-block" v-if="$v.machtigingType.$error && !$v.machtigingType.required">Periodiek is verplicht</span>\n          </div>\n          \n    <fieldset>\n    <legend class="sr-only">Bedrag</legend>\n     <div class="form-row">\n            <div class="form-group col-md-12" v-bind:class="{ \'has-error\': $v.bedrag.$error }">\n              <label for="amountList">Met een bedrag van:</label>\n              <div id="amountList" class="radio-list" role="radiogroup">\n                <input class="form-check-input" v-model.trim="bedrag" type="radio" name="transaction-amount" id="bedrag1" role="radio" v-bind:value="amount1">\n                <label class="form-check-label form-control left" for="bedrag1">&euro;{{ amount1 }}</label>\n\n                <input class="form-check-input" v-model.trim="bedrag" type="radio" name="transaction-amount" id="bedrag2" role="radio" v-bind:value="amount2" checked="checked" tabindex="0">\n                <label class="form-check-label form-control" for="bedrag2">&euro;{{ amount2 }}</label>\n\n                <input class="form-check-input" v-model.trim="bedrag" type="radio" name="transaction-amount" id="bedrag3" role="radio" v-bind:value="amount3">\n                <label class="form-check-label form-control" for="bedrag3">&euro;{{ amount3 }}</label>\n              </div>\n            </div>\n\n            <div class="form-group col-md-12" v-bind:class="{ \'has-error\': $v.bedrag.$error }">\n              <label for="customAmount">Ander bedrag:</label>\n              <div class="input-group">\n                <div class="input-group-prepend">\n                  <div class="input-group-text">&euro;</div>\n                </div>\n                <input id="customAmount" class="form-control" v-model.trim="bedrag" @input="$v.bedrag.$touch()" name="transaction-amount">\n                <span class="help-block" v-if="$v.bedrag.$error && !$v.bedrag.required">Bedrag is verplicht</span>\n                <span class="help-block" v-if="$v.bedrag.$error && $v.bedrag.required && !$v.bedrag.numeric">Bedrag moet een nummer zijn</span>\n                <span class="help-block" v-if="$v.bedrag.$error && $v.bedrag.required && $v.bedrag.numeric && !$v.bedrag.between">Het minimale donatiebedrag is {{ formconfig.min_amount }} euro</span>\n              </div>\n            </div>\n          </div>\n    </fieldset>\n         \n    \n    <fieldset v-if="machtigingType ===\'E\'">\n    <legend class="sr-only">Betalingsmethode</legend>\n       <div class="form-row">\n      <div class="form-group col-md-12" v-bind:class="{ \'has-error\': $v.betaling.$error }">\n        <label for="paymentMethods">Betalingswijze:</label>\n        <div id="paymentMethods" class="radio-list" role="radiogroup">\n        <input class="form-check-input" v-model.trim="betaling" type="radio" name="ideal" id="ideal" value="ID" checked="checked" tabindex="0" role="radio"\n        v-on:click="donationformVue.validateStep(\'step1\');">\n        <label class="form-check-label form-control left" for="ideal">iDeal</label>\n        <input class="form-check-input" v-model.trim="betaling" type="radio" name="machtiging" id="machtiging" value="EM" role="radio" v-on:click="donationformVue.validateStep(\'step1\');">\n        <label class="form-check-label form-control" for="machtiging">Eenmalige machtiging</label>\n        </div>\n      </div> \n      </div>\n    </fieldset>\n          \n           </div>',data:()=>({machtigingType:formconfig.suggested_frequency[0],amount1:"M"===formconfig.suggested_frequency[0]?formconfig.recurring_amount1:formconfig.oneoff_amount1,amount2:"M"===formconfig.suggested_frequency[0]?formconfig.recurring_amount2:formconfig.oneoff_amount2,amount3:"M"===formconfig.suggested_frequency[0]?formconfig.recurring_amount3:formconfig.oneoff_amount3,bedrag:"M"===formconfig.suggested_frequency[0]?formconfig.recurring_suggested_amount:formconfig.oneoff_suggested_amount,betaling:"M"===formconfig.suggested_frequency[0]?"EM":"ID"}),validations:{machtigingType:{required:i},bedrag:{required:i,numeric:s,between:t(formconfig.min_amount,999)},betaling:{required:i},form:["machtigingType","bedrag","betaling"]},methods:{validate(){this.$v.form.$reset(),this.$v.form.$touch();var o=!this.$v.form.$invalid;return this.$emit("on-validate",this.$data,o),o&&dataLayer.push({event:"virtualPageViewDonatie",virtualPageviewStep:"Stap 1",virtuelPageviewName:"Donatie"}),o},changePeriodic(){this.$data.amount1="M"===this.$data.machtigingType?formconfig.recurring_amount1:formconfig.oneoff_amount1,this.$data.amount2="M"===this.$data.machtigingType?formconfig.recurring_amount2:formconfig.oneoff_amount2,this.$data.amount3="M"===this.$data.machtigingType?formconfig.recurring_amount3:formconfig.oneoff_amount3,this.$data.bedrag="M"===this.$data.machtigingType?formconfig.recurring_suggested_amount:formconfig.oneoff_suggested_amount,this.$data.min_amount="M"===this.$data.machtigingType?formconfig.recurring_min_amount:formconfig.oneoff_min_amount,this.$data.betaling="M"===this.$data.machtigingType?"EM":"ID",this.validate()}}}),Vue.component("step2",{template:'\n        <div>\n          <div class="form-group">\n            <div class="input-group" v-bind:class="{ \'has-error\': $v.geslacht.$error }">\n\n              <div class="input-group-prepend">\n                  <span class="input-group-text" id="inputGroupPrepend">Aanhef:</span>\n              </div>\n\n              <label for="prefix" class="sr-only">Aanhef:</label>\n              <select id="prefix" class="form-control" v-model.trim="geslacht" @input="$v.geslacht.$touch()" name="honorific-prefix" tabindex="0">\n                <option value="V">Mevrouw</option>\n                <option value="M">Meneer</option>\n                <option value="O">Beste</option>\n              </select>\n\n              <span class="help-block" v-if="$v.geslacht.$error && !$v.geslacht.required">Geslacht is verplicht</span>\n            </div>\n          </div>\n\n          <div class="form-row">\n            <div class="form-group col-md-8" v-bind:class="{ \'has-error\': $v.voornaam.$error }">\n               <label class="sr-only" for="given-name">Voornaam</label>\n              <input class="form-control" v-model.trim="voornaam" @input="$v.voornaam.$touch()" placeholder="Voornaam*" name="given-name" id="given-name">\n               <span class="help-block" v-if="$v.voornaam.$error && !$v.voornaam.required">Voornaam is verplicht</span>\n            </div>\n\n            <div class="form-group col-md-4" v-bind:class="{ \'has-error\': $v.initialen.$error }">\n              <label class="sr-only" for="initials">Initialen</label>\n              <input class="form-control" v-model.trim="initialen" @input="$v.initialen.$touch()" placeholder="Initialen" name="initials" id="initials">\n               <span class="help-block" v-if="$v.initialen.$error && !$v.initialen.required">Initialen zijn verplicht</span>\n            </div>\n          </div>\n\n          <div class="form-row">\n            <div class="form-group col-md-4">\n               <label class="sr-only" for="middle-name">Tussenvoegsel</label>\n              <input class="form-control" v-model.trim="tussenvoegsel" @input="$v.tussenvoegsel.$touch()" placeholder="Tussenv." id="middle-name">\n            </div>\n\n            <div class="form-group col-md-8" v-bind:class="{ \'has-error\': $v.achternaam.$error }">\n               <label class="sr-only" for="surname">Achternaam</label>\n              <input class="form-control" v-model.trim="achternaam" @input="$v.achternaam.$touch()" placeholder="Achternaam*" name="surname" id="surname">\n               <span class="help-block" v-if="$v.achternaam.$error && !$v.achternaam.required">Achternaam is verplicht</span>\n            </div>\n          </div>\n\n          <div class="form-row">\n            <div class="form-group col-md-12" v-bind:class="{ \'has-error\': $v.email.$error }">\n               <label class="sr-only" for="email">Email</label>\n              <input class="form-control" v-model.trim="email" @input="$v.email.$touch()" placeholder="E-mail*" name="email" id="email">\n              <span class="help-block" v-if="$v.email.$error && !$v.email.required">E-mail is verplicht</span>\n              <span class="help-block" v-if="$v.email.$error && !$v.email.email">Dit is geen valide e-mail adres</span>\n            </div>\n          </div>\n\n          <div class="form-row">\n            <div class="form-group col-md-12" v-bind:class="{ \'has-error\': $v.telefoonnummer.$error }">\n               <label class="sr-only" for="tel">Telefoonnummer</label>\n              <input class="form-control" v-model.trim="telefoonnummer" @input="$v.telefoonnummer.$touch()" placeholder="Tel. nr." name="tel" id="tel">\n               <span class="help-block" v-if="$v.telefoonnummer.$error && !$v.telefoonnummer.required">Telefoonnummer is verplicht</span>\n               <span class="help-block" v-if="$v.telefoonnummer.$error && $v.telefoonnummer.required && !$v.telefoonnummer.numeric">Telefoonnummer moet een nummer zijn</span>\n               <span class="help-block" v-if="$v.telefoonnummer.$error && $v.telefoonnummer.required && $v.telefoonnummer.numeric && !$v.telefoonnummer.between">Telefoonnummer moet uit 10 cijfers bestaan</span>\n            </div>\n          </div>\n\n          <div class="form-group" v-bind:class="{ \'has-error\': $v.rekeningnummer.$error }" v-if="!ideal">\n            <div class="input-group">\n              <div class="input-group-prepend">\n                <span class="input-group-text" id="inputGroupPrepend">IBAN:</span>\n              </div>\n              <label class="sr-only" for="bankaccount">IBAN:</label>\n              <input class="form-control" v-model.trim="rekeningnummer" @input="$v.rekeningnummer.$touch()" placeholder="*" id="bankaccount">\n              <span class="help-block" v-if="$v.rekeningnummer.$error && !$v.rekeningnummer.required">Rekeningnummer is verplicht</span>\n              <span class="help-block" v-if="$v.rekeningnummer.$error && $v.rekeningnummer.required && !$v.rekeningnummer.alphaNum">Rekeningnummer mag alleen letters en cijfers bevatten</span>\n            </div>\n          </div>\n        </div>',data:()=>({initialen:"",voornaam:"",tussenvoegsel:"",achternaam:"",geslacht:"",email:"",telefoonnummer:"",rekeningnummer:""}),validations:{initialen:{},voornaam:{required:i},tussenvoegsel:{},achternaam:{required:i},geslacht:{},email:{required:i,email:l},telefoonnummer:{numeric:s,minLength:a(10),maxLength:r(10)},rekeningnummer:{required:u(function(){return this.ideal}),alphaNum:p},form:["initialen","voornaam","tussenvoegsel","achternaam","geslacht","email","telefoonnummer","rekeningnummer"]},methods:{validate(){this.$v.form.$reset(),this.$v.form.$touch();var o=!this.$v.form.$invalid;return this.$emit("on-validate",this.$data,o),o&&dataLayer.push({event:"virtualPageViewDonatie",virtualPageviewStep:"Stap 2",virtuelPageviewName:"Gegevens"}),o}},props:["ideal"]}),Vue.component("step3",{template:'\n        <div>\n          <div class="form-row">\n            <div class="form-group col-md-5" v-bind:class="{ \'has-error\': $v.postcode.$error }">\n              <label class="sr-only" for="postal-code">Postcode</label>\n              <input class="form-control" v-model.trim="postcode" @input="$v.postcode.$touch()" placeholder="Postcode*" name="postal-code" id="postal-code">\n               <span class="help-block" v-if="$v.postcode.$error && !$v.postcode.required">Postcode is verplicht</span>\n               <span class="help-block" v-if="$v.postcode.$error && $v.postcode.required && !$v.postcode.alphaNum">Postcode mag alleen letters en cijfers bevatten, geen spaties</span>\n               <span class="help-block" v-if="$v.postcode.$error && $v.postcode.required && $v.postcode.alphaNum && !$v.postcode.between">Postcode moet in 0000AA formaat</span>\n            </div>\n\n            <div class="form-group col-md-4" v-bind:class="{ \'has-error\': $v.huisnummer.$error }">\n              <label class="sr-only" for="housenumber">Huisnummer</label>\n              <input class="form-control" v-on:blur="fetchAddress()" v-model.trim="huisnummer" @input="$v.huisnummer.$touch()" placeholder="Huisnr.*" id="housenumber">\n               <span class="help-block" v-if="$v.huisnummer.$error && !$v.huisnummer.required">Huisnummer is verplicht</span>\n               <span class="help-block" v-if="$v.huisnummer.$error && $v.huisnummer.required && !$v.huisnummer.numeric">Huisnummer moet een nummer zijn</span>\n            </div>\n\n            <div class="form-group col-md-3" v-bind:class="{ \'has-error\': $v.huisnummertoevoeging.$error }">\n              <label class="sr-only" for="housenumberaddition">Toevoeging</label>\n              <input class="form-control" v-model.trim="huisnummertoevoeging" @input="$v.huisnummertoevoeging.$touch()" placeholder="Toev." id="housenumberaddition">\n            </div>\n          </div>\n\n          <div class="form-group">\n            <label class="sr-only" for="street">Straatnaam</label>\n            <input class="form-control" v-model.trim="straat" placeholder="Straat" id="street">\n          </div>\n\n          <div class="form-group">\n             <label class="sr-only" for="city">Woonplaats</label>\n            <input class="form-control" v-model.trim="woonplaats" placeholder="Plaats" id="city">\n          </div>\n\n          <div class="form-group" v-bind:class="{ \'has-error\': $v.landcode.$error }">\n             <label class="sr-only" for="country-name">Land</label>\n            <select class="form-control" v-model.trim="landcode" @input="$v.landcode.$touch()" id="country-name" name="country-name">\n              <option value="  "> Selecteer een land</option>\n              <option value="AF">AFGHANISTAN</option>\n              <option value="AL">ALBANIE</option>\n              <option value="DZ">ALGERIJE</option>\n              <option value="AD">ANDORRA</option>\n              <option value="AO">ANGOLA</option>\n              <option value="AG">ANTIGUA EN BARBUDA</option>\n              <option value="AR">ARGENTINIE</option>\n              <option value="AM">ARMENIE</option>\n              <option value="AB">ARUBA</option>\n              <option value="SH">ASCENSION</option>\n              <option value="AU">AUSTRALIE</option>\n              <option value="AZ">AZERBEIDZJAN</option>\n              <option value="BH">BAHREIN</option>\n              <option value="BD">BANGLADESH</option>\n              <option value="BB">BARBADOS</option>\n              <option value="BY">BELARUS</option>\n              <option value="BE">BELGIE</option>\n              <option value="BZ">BELIZE</option>\n              <option value="BJ">BENIN</option>\n              <option value="BM">BERMUDA</option>\n              <option value="BT">BHUTAN</option>\n              <option value="BO">BOLIVIA</option>\n              <option value="BA">BOSNIE-HERZEGOWINA</option>\n              <option value="BW">BOTSWANA</option>\n              <option value="BR">BRAZILIE</option>\n              <option value="VG">BRITSE MAAGDENEILANDEN</option>\n              <option value="BN">BRUNEI</option>\n              <option value="BG">BULGARIJE</option>\n              <option value="BF">BURKINA FASO</option>\n              <option value="BI">BURUNDI</option>\n              <option value="KH">CAMBODJA</option>\n              <option value="CA">CANADA</option>\n              <option value="KY">CAYMANEILANDEN</option>\n              <option value="CF">CENTRAALAFRIKAANSE REP.</option>\n              <option value="CL">CHILI</option>\n              <option value="CX">CHRISTMASEILAND</option>\n              <option value="CO">COLOMBIA</option>\n              <option value="CG">CONGO</option>\n              <option value="CR">COSTA RICA</option>\n              <option value="CU">CUBA</option>\n              <option value="CY">CYPRUS</option>\n              <option value="BS">DE BAHAMA\'S</option>\n              <option value="KM">DE COMOREN</option>\n              <option value="PH">DE FILIPIJNEN</option>\n              <option value="MV">DE MALADIVEN</option>\n              <option value="DK">DENEMARKEN</option>\n              <option value="ZZ">DIVERSEN</option>\n              <option value="DJ">DJIBOUTI</option>\n              <option value="DM">DOMINICA</option>\n              <option value="DO">DOMINICAANSE REPUBLIEK</option>\n              <option value="DE">DUITSLAND</option>\n              <option value="EC">ECUADOR</option>\n              <option value="EG">EGYPTE</option>\n              <option value="SV">EL SALVADOR</option>\n              <option value="CQ">EQUATORIAAL GUINEA</option>\n              <option value="ER">ERITREA</option>\n              <option value="EE">ESTLAND</option>\n              <option value="ET">ETHIOPIE</option>\n              <option value="FK">FALKLANDEILANDEN</option>\n              <option value="FO">FAROE EILANDEN</option>\n              <option value="FJ">FIDJI-EILANDEN</option>\n              <option value="FL">FILIPIJNEN</option>\n              <option value="FI">FINLAND</option>\n              <option value="FR">FRANKRIJK</option>\n              <option value="GF">FRANS-GUYANA</option>\n              <option value="PF">FRANS-POLUNESIE</option>\n              <option value="TF">FRANSE ZUIDELIJKE EN Z-POOLGEB</option>\n              <option value="GA">GABON</option>\n              <option value="GM">GAMBIA</option>\n              <option value="GE">GEORGIE</option>\n              <option value="GH">GHANA</option>\n              <option value="GI">GIBRALTAR</option>\n              <option value="GD">GRENADA</option>\n              <option value="GR">GRIEKENLAND</option>\n              <option value="GL">GROENLAND</option>\n              <option value="GB">GROOT-BRITTANNIE</option>\n              <option value="GP">GUADELOUPE</option>\n              <option value="GT">GUATEMALA</option>\n              <option value="GN">GUINEE</option>\n              <option value="GW">GUINEE BISSAU</option>\n              <option value="GY">GUYANA</option>\n              <option value="HT">HAITI</option>\n              <option value="HN">HONDURAS</option>\n              <option value="HU">HONGARIJE</option>\n              <option value="HK">HONGKONG</option>\n              <option value="IE">IERLAND</option>\n              <option value="IS">IJSLAND</option>\n              <option value="IN">INDIA</option>\n              <option value="ID">INDONESIE</option>\n              <option value="IQ">IRAK</option>\n              <option value="IR">IRAN</option>\n              <option value="IL">ISRAEL</option>\n              <option value="IT">ITALIE</option>\n              <option value="CI">IVOORKUST</option>\n              <option value="JM">JAMAICA</option>\n              <option value="JP">JAPAN</option>\n              <option value="YE">JEMEN</option>\n              <option value="YU">JOEGOSLAVIE (KLEIN)</option>\n              <option value="JO">JORDANIE</option>\n              <option value="CV">KAAP VERDIE</option>\n              <option value="CM">KAMEROEN</option>\n              <option value="KZ">KAZACHSTAN</option>\n              <option value="KE">KENYA</option>\n              <option value="KI">KIRIBATI</option>\n              <option value="KW">KOEWEIT</option>\n              <option value="KR">KOREA</option>\n              <option value="HR">KROATIE</option>\n              <option value="KG">KYRGYZSTAN</option>\n              <option value="LA">LAOS</option>\n              <option value="LV">LETLAND</option>\n              <option value="LB">LIBANON</option>\n              <option value="LR">LIBERIA</option>\n              <option value="LY">LIBIE</option>\n              <option value="LI">LIECHTENSTEIN</option>\n              <option value="LT">LITOUWEN</option>\n              <option value="LU">LUXEMBURG</option>\n              <option value="MA">Macedonië</option>\n              <option value="MG">MADAGASKAR</option>\n              <option value="MW">MALAWI</option>\n              <option value="MY">MALEISIE</option>\n              <option value="ML">MALI</option>\n              <option value="MT">MALTA</option>\n              <option value="MN">MAROKKO</option>\n              <option value="MH">MARSHALLEILANDEN</option>\n              <option value="MQ">MARTINIQUE</option>\n              <option value="MR">MAURITANIE</option>\n              <option value="MU">MAURITIUS</option>\n              <option value="MX">MEXICO</option>\n              <option value="FM">MICRONESIA</option>\n              <option value="MD">MOLDAVIA</option>\n              <option value="MC">MONACO</option>\n              <option value="MO">MOZAMBIQUE</option>\n              <option value="MM">MYANMAR</option>\n              <option value="NA">NAMIBIE</option>\n              <option value="NR">NAURU</option>\n              <option value="NL">NEDERLAND</option>\n              <option value="AN">NEDERLANDSE ANTILLEN</option>\n              <option value="NP">NEPAL</option>\n              <option value="NI">NICARAGUA</option>\n              <option value="NZ">NIEUW-ZEELAND</option>\n              <option value="NG">NIGER</option>\n              <option value="NE">NIGERIA</option>\n              <option value="NO">NOORWEGEN</option>\n              <option value="UA">OEKRAINE</option>\n              <option value="UZ">OEZBEKISTAN</option>\n              <option value="OM">OMAN</option>\n              <option value="AT">OOSTENRIJK</option>\n              <option value="PK">PAKISTAN</option>\n              <option value="PA">PANAMA</option>\n              <option value="PG">PAPOEA-NIEUW-GUINEA</option>\n              <option value="PY">PARAGUAY</option>\n              <option value="PE">PERU</option>\n              <option value="PL">POLEN</option>\n              <option value="PT">PORTUGAL</option>\n              <option value="QA">QUATAR</option>\n              <option value="RO">ROEMENIE</option>\n              <option value="RW">RUANDA</option>\n              <option value="RU">RUSSISCHE FEDERATIE</option>\n              <option value="LC">SAINT LUCIA</option>\n              <option value="SM">SAN MARINO</option>\n              <option value="SA">SAUDI-ARABIE</option>\n              <option value="SN">SENEGAL</option>\n              <option value="SC">SEYCHELLEN</option>\n              <option value="SL">SIERRA LEONE</option>\n              <option value="SG">SINGAPORE</option>\n              <option value="VC">SINT VINCENT EN DE GRENADINEN</option>\n              <option value="SK">SLOWAKIJE</option>\n              <option value="SD">SOEDAN</option>\n              <option value="SB">SOLOMONEILANDEN</option>\n              <option value="ES">SPANJE</option>\n              <option value="LK">SRI LANKA</option>\n              <option value="SR">SURINAME</option>\n              <option value="SZ">SWAZILAND</option>\n              <option value="SY">SYRIE</option>\n              <option value="TJ">TADZJIKISTAN</option>\n              <option value="TA">TAIWAN</option>\n              <option value="TZ">TANZANIA</option>\n              <option value="TH">THAILAND</option>\n              <option value="TG">TOGO</option>\n              <option value="TO">TONGA</option>\n              <option value="TT">TRINIDAD EN TOBAGO</option>\n              <option value="TD">TSJAAD</option>\n              <option value="CZ">TSJECHIE</option>\n              <option value="TN">TUNESIE</option>\n              <option value="TR">TURKIJE</option>\n              <option value="TM">TURKMENISTAN</option>\n              <option value="TV">TUVALU</option>\n              <option value="UG">UGANDA</option>\n              <option value="UY">URUGUAY</option>\n              <option value="VA">VATICAANSE STAAT</option>\n              <option value="VE">VENEZUELA</option>\n              <option value="AE">VERENIGDE ARABISCHE EMIRATEN</option>\n              <option value="US">VERENIGDE STATEN VAN AMERIKA</option>\n              <option value="VN">VIETNAM</option>\n              <option value="CN">VOLKSREPUBLIEK CHINA</option>\n              <option value="KP">VOLKSREPUBLIEK KOREA</option>\n              <option value="WS">WEST-SOMOA</option>\n              <option value="ZR">ZAIRE</option>\n              <option value="ZM">ZAMBIA</option>\n              <option value="ZW">ZIMBABWE</option>\n              <option value="ZA">ZUID AFRIKA</option>\n              <option value="ZJ">ZUID JEMEN</option>\n              <option value="SE">ZWEDEN</option>\n              <option value="CH">ZWITSERLAND</option>\n            </select>\n             <span class="help-block" v-if="$v.landcode.$error && !$v.landcode.required">Land is verplicht</span>\n          </div>\n          <div class="machtiging_info">\n            Ik machtig hierbij Greenpeace tot wederopzegging (of éénmalig indien hierboven gekozen) bovengenoemd bedrag van mijn rekening af te schrijven.<br/><br/>\n          </div>\n        </div>',data:()=>({straat:"",postcode:"",huisnummer:"",huisnummertoevoeging:"",woonplaats:"",landcode:"NL"}),validations:{straat:{required:i},postcode:{minLength:a(6),maxLength:r(6),required:i,alphaNum:p},huisnummer:{required:i,numeric:s},huisnummertoevoeging:{maxLength:r(8)},woonplaats:{required:i},landcode:{required:i},form:["straat","postcode","huisnummer","huisnummertoevoeging","woonplaats","landcode"]},methods:{validate(){this.$v.form.$reset(),this.$v.form.$touch();var o=!this.$v.form.$invalid;return this.$emit("on-validate",this.$data,o),o&&dataLayer.push({event:"virtualPageViewDonatie",virtualPageviewStep:"Stap 3",virtuelPageviewName:"Adres"}),o},fetchAddress:function(){var o=document.getElementById("postal-code"),n=document.getElementById("housenumber"),e=o.value,i=n.value;Vue.http.interceptors.push((o,n)=>{o.headers.set("x-api-key","P7TdlkQG4k4ppvVyAXmdD4TR9v5fW4YT8qv4TzOY"),o.headers.set("Accept","application/hal+json"),n()}),this.$http.get("https://api.postcodeapi.nu/v2/addresses/?postcode="+e+"&number="+i).then(function(o){let n=o.body._embedded.addresses[0].street,e=o.body._embedded.addresses[0].city.label;this.populateFields(n,e)},function(){})},populateFields:function(o,n){var e=document.getElementById("street"),i=document.getElementById("city");e.setAttribute("disabled","disabled"),i.setAttribute("disabled","disabled"),this.straat=o,this.woonplaats=n}}}),donationformVue=new Vue({el:"#app",data:{finalModel:{marketingcode:"M"===formconfig.suggested_frequency[0]?formconfig.marketingcode_recurring:formconfig.marketingcode_oneoff,literatuurcode:formconfig.literatuurcode,guid:"",betaling:"M"===formconfig.suggested_frequency[0]?"EM":"ID"},result:{msg:"",hasError:!1},idealData:{initials:"",firstname:"",middlename:"",lastname:"",gender:"",birthday:"",street:"",housenumber:"",housenumberAddition:"",postcode:"",city:"",email:"",phonenumber:"",description:"",amount:0,comment:"",issuersBank:"",clientIp:"",clientUserAgent:"",returnUrlSuccess:formconfig.returnpage,returnUrlCancel:formconfig.errorpage,returnUrlError:formconfig.errorpage,returnUrlReject:formconfig.errorpage,marketingCode:formconfig.marketingcode_oneoff,literatureCode:formconfig.literatuurcode,guid:null,countryId:null,accountNumber:null,subscriptionCode:null,subscriptionEndDate:null,subscriptionMonths:null}},methods:{onComplete:function(){var o=$("#app input"),n=$("#app button");$(".wizard-footer-right .wizard-btn").text(""),$(".wizard-footer-right .wizard-btn").addClass("loader"),this.disableFormElements(o),this.disableFormElements(n),$(".wizard-nav > li > a").addClass("disabled"),"ID"===this.finalModel.betaling?this.submitiDeal():this.submit()},onSucces:function(){var o=$("#Adres4");o.addClass("card"),o.empty(),o.append('<div class="card-body donation-card"></div>');var n=$(".donation-card");n.append('<h2 class="card-title">'+formconfig.thanktitle+"</h2>"),n.append('<p class="card-text">'+formconfig.thankdescription+"</p>"),$(".wizard-footer-right .wizard-btn").removeClass("loader"),$(".wizard-footer-right .wizard-btn").text("Afgerond"),dataLayer.push({event:"virtualPageViewDonatie",virtualPageviewStep:"Bedankt",virtuelPageviewName:"Bedankt"}),gtm_products=[],gtm_products.push({name:"machtiging",sku:this.finalModel.machtigingType,category:"donatie",price:this.finalModel.bedrag,quantity:1}),dataLayer.push({event:"trackTrans",transactionId:donationformVue.getGTMTransactionId(),transactionAffiliation:"",transactionTotal:this.finalModel.bedrag,transactionTax:"",transactionShipping:"",transactionPaymentType:"machtiging",transactionCurrency:"EUR",transactionPromoCode:"",transactionProducts:gtm_products})},onFailure:function(){var o=$("#Adres4");o.addClass("card"),o.empty(),o.append('<div class="card-body donation-card"></div>');var n=$(".donation-card");n.append('<h2 class="card-title">Sorry..</h2>'),n.append('<p class="card-text">Helaas gaat er iets mis met de donatieverwerking. Er wordt geen geld afgeschreven, probeer het later nog eens.</p>'),$(".wizard-footer-right .wizard-btn").removeClass("loader"),$(".wizard-footer-right .wizard-btn").text("Afgerond")},submit:function(){this.result.msg="",this.result.hasError=!1,this.finalModel.marketingcode="M"===this.finalModel.machtigingType?formconfig.marketingcode_recurring:formconfig.marketingcode_oneoff,$.ajax({method:"POST",url:"https://www.mygreenpeace.nl/GPN.RegistrerenApi/machtiging/register",data:JSON.stringify(this.finalModel),contentType:"application/json; charset=utf-8",dataType:"json",success:function(){let n=o().clangct;null!=n&&$.ajax({url:"/wp-content/plugins/planet4-gpnl-plugin-blocks/includes/assets/js/clang-conversion.js?clangct="+n,dataType:"script"}),donationformVue.onSucces()},error:function(){null!=n&&$.ajax({url:"/clang-conversion.js",dataType:"script"}),donationformVue.onFailure()}})},submitiDeal:function(){this.result.msg="",this.result.hasError=!1,this.idealData.initials=this.finalModel.initialen,this.idealData.firstname=this.finalModel.voornaam,this.idealData.middlename=this.finalModel.tussenvoegsel,this.idealData.lastname=this.finalModel.achternaam,this.idealData.gender=this.finalModel.geslacht,this.idealData.email=this.finalModel.email,this.idealData.phonenumber=this.finalModel.telefoonnummer,this.idealData.description="Eenmalige donatie Greenpeace tnv "+this.finalModel.voornaam+" "+this.finalModel.achternaam,this.idealData.amount=this.finalModel.bedrag,$.ajax({method:"POST",url:"https://www.mygreenpeace.nl/GPN.RegistrerenApi/payment/ideal",data:JSON.stringify(this.idealData),contentType:"application/json; charset=utf-8",dataType:"json",success:function(n){let e=o().clangct;null!=e&&$.ajax({url:"/wp-content/plugins/planet4-gpnl-plugin-blocks/includes/assets/js/clang-conversion.js?clangct="+e,dataType:"script"}),window.location.href=n.transaction.redirectUrl},error:function(){donationformVue.onFailure()}})},disableFormElements:function(o){o.each(function(){this.setAttribute("disabled","true")})},validateStep(o){return this.$refs[o].validate()},mergePartialModels(o,n){n&&(this.finalModel=Object.assign({},this.finalModel,o),this.isiDeal(),this.$forceUpdate())},isiDeal(){return void 0!==this.$refs.step1?"ID"===this.$refs.step1._data.betaling:"ID"===this.finalModel.betaling},getGTMTransactionId(){return"_"+[this.finalModel.marketingcode]+"_"+Math.random().toString(36).substr(2,9)}}})});
//# sourceMappingURL=maps/donationform.js.map
