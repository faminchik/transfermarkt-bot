export default `

<!DOCTYPE html>

<head>
	
</head>
<body x-ms-format-detection="none" style="overflow-y: scroll;"
      class="" itemscope
      itemtype="http://schema.org/WebPage">


<div id="navibalken" class="navibalken hide-for-small"></div>
<div id="main">
	
<div id="modalHolder"></div>

    <div class="row">
	<div class="large-12 columns">
		<div class="box">
			<div class="table-header">
				Transfers 18/19				<div class="header-social">
					<div class="teilen-desktop-link" name="teilen-desktop" onClick="ga('send','event','teilen-desktop','click','teilen');
"><ul><li><a href="mailto:?to=&subject=Transfers&body=https%3A%2F%2Fwww.transfermarkt.com%2Ffc-paris-saint-germain%2Ftransfers%2Fverein%2F583%2Fplus%2F1%3Fsaison_id%3D2018%26pos%3D%26detailpos%3D%26w_s%3Ds" class="MailToLink" name="teilen-mail-desktop" onClick="ga('send','event','teilen-mail-desktop','click','teilen');
"><img src="https://tmsi.akamaized.net/icons/mail-schwarz.svg" alt="Mail" /></li><li><a href="https://twitter.com/share?url=https%3A%2F%2Fwww.transfermarkt.com%2Ffc-paris-saint-germain%2Ftransfers%2Fverein%2F583%2Fplus%2F1%3Fsaison_id%3D2018%26pos%3D%26detailpos%3D%26w_s%3Ds&text=Transfers" target="_blank" class="TwitterLink" name="teilen-twitter-desktop" onClick="ga('send','event','teilen-twitter-desktop','click','teilen');
"><img src="https://tmsi.akamaized.net/icons/Twitter-Blau.svg" alt="Twitter" /></a></li><li><a href="http://www.facebook.com/share.php?u=https%3A%2F%2Fwww.transfermarkt.com%2Ffc-paris-saint-germain%2Ftransfers%2Fverein%2F583%2Fplus%2F1%3Fsaison_id%3D2018%26pos%3D%26detailpos%3D%26w_s%3Ds" target="_blank" class="FacebookLink" name="teilen-facebook-desktop" onClick="ga('send','event','teilen-facebook-desktop','click','teilen');
" ><img src="https://tmsi.akamaized.net/icons/Facebook-Blau.svg" alt="Facebook" /></a></li></ul></div>				</div>
			</div>
			<p class="info-content">
This is an overview of all the club's transfers in the chosen season. It may be filtered by positions.			</p>
			<div class="content">
<form action="/paris-saint-germain/transfers/verein/583/plus/1" method="get">				<div class="row">
					<div class="large-12 columns">
						<table class="auflistung">
							<tbody>
								<tr>
									<td>Filter by Season:</td>
									<td>
										<div class="inline-select">
											<select name="saison_id" data-placeholder="Andere Saison wählen" class="chzn-select" tabindex="0">
																									<option value="2019">19/20</option>
													<option  selected="selected"value="2018">18/19</option>
													<option value="2017">17/18</option>
													<option value="2016">16/17</option>
													<option value="2015">15/16</option>
													<option value="2014">14/15</option>
													<option value="2013">13/14</option>
													<option value="2012">12/13</option>
													<option value="2011">11/12</option>
													<option value="2010">10/11</option>
													<option value="2009">09/10</option>
													<option value="2008">08/09</option>
													<option value="2007">07/08</option>
													<option value="2006">06/07</option>
													<option value="2005">05/06</option>
													<option value="2004">04/05</option>
													<option value="2003">03/04</option>
													<option value="2002">02/03</option>
													<option value="2001">01/02</option>
													<option value="2000">00/01</option>
													<option value="1999">99/00</option>
													<option value="1998">98/99</option>
													<option value="1997">97/98</option>
													<option value="1996">96/97</option>
													<option value="1995">95/96</option>
													<option value="1994">94/95</option>
													<option value="1993">93/94</option>
													<option value="1992">92/93</option>
													<option value="1991">91/92</option>
													<option value="1990">90/91</option>
													<option value="1989">89/90</option>
													<option value="1988">88/89</option>
													<option value="1987">87/88</option>
													<option value="1986">86/87</option>
													<option value="1985">85/86</option>
													<option value="1984">84/85</option>
													<option value="1983">83/84</option>
													<option value="1982">82/83</option>
													<option value="1981">81/82</option>
													<option value="1980">80/81</option>
													<option value="1979">79/80</option>
													<option value="1978">78/79</option>
													<option value="1977">77/78</option>
													<option value="1976">76/77</option>
													<option value="1975">75/76</option>
													<option value="1974">74/75</option>
													<option value="1973">73/74</option>
													<option value="1972">72/73</option>
													<option value="1971">71/72</option>
													<option value="1970">70/71</option>
													<option value="1958">58/59</option>
													<option value="1957">57/58</option>
													<option value="1956">56/57</option>
											</select>
										</div>
									</td>
									<td>

									</td>
								</tr>
								<tr>
									<td>Position:</td>
									<td>
										<div class="inline-select">
											<select name="pos" data-placeholder="Position wählen" class="chzn-select" tabindex="0">
												<option value="">All positions</option>
												<option  value="Torwart">Goalkeepers</option>
												<option  value="Abwehr">Defenders</option>
												<option  value="Mittelfeld">Midfielder</option>
												<option  value="Sturm">Strikers</option>
											</select>
										</div>
									</td>
									<td>

									</td>
								</tr>
								<tr>
									<td>Detailed position:</td>
									<td>
										<div class="inline-select">
											<select name="detailpos" data-placeholder="Position wählen" class="chzn-select" tabindex="0">
												<option value="">All positions</option>
																									<option value="1">Goalkeeper</option>
													<option value="2">Sweeper</option>
													<option value="3">Centre-Back</option>
													<option value="4">Left-Back</option>
													<option value="5">Right-Back</option>
													<option value="6">Defensive Midfield</option>
													<option value="7">Central Midfield</option>
													<option value="8">Right Midfield</option>
													<option value="9">Left Midfield</option>
													<option value="10">Attacking Midfield</option>
													<option value="11">Left Winger</option>
													<option value="12">Right Winger</option>
													<option value="13">Second Striker</option>
													<option value="14">Centre-Forward</option>
											</select>
										</div>
									</td>
									<td>
									</td>
								</tr>
								<tr>
									<td>Transfer period:</td>
									<td>
										<div class="inline-select">
											<select name="w_s" data-placeholder="Transfer period" class="chzn-select" tabindex="0">
												<option value="">Indifferent</option>
												<option value="s" selected="selected">Summer Transfers only</option>
												<option value="w" >Winter transfers only</option>
											</select>
										</div>
									</td>
									<td>
										<input type="submit" class="small button" value="Display">
									</td>
								</tr>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
</form>			</div>
		</div>
		
	<div class="box">
		<div class="table-header">Transfer activity </div>
		<table>
			<thead>
			<tr>
				<th>Earnings/expenditures</th>
				<th class="zentriert">Arrivals/Departures</th>
				<th class="rechts">Fee</th>
			</tr>
			</thead>
			<tbody>
			<tr>
				<td>Income</td>
				<td class="zentriert">18</td>
				<td class="greentext rechts">
					112,50 mil. €				</td>
			</tr>
			<tr>
				<td>Expenditures</td>
				<td class="zentriert">20</td>
				<td class="redtext rechts">
					217,00 mil. €				</td>
			</tr>
			</tbody>
			<tfoot>
			<tr>
				<td colspan="2">Total results</td>				
				<td class="redtext rechts">
					-104,50 mil. €				</td>
			</tr>
			</tfoot>
		</table>
		<div class="table-footer">
			<a title="Paris Saint-Germain" class="" id="583" href="/fc-paris-saint-germain/transfers/verein/583/saison_id/2018">All transfers</a>		</div>
		
	</div>
		<div class="box">
			<div class="table-header"><a name="zugaenge" class="anchor">Arrivals</a></div>

<div class="kartei-button-bar">
    <a href="/paris-saint-germain/transfers/verein/583/saison_id/2018/pos//detailpos/0/w_s/s#zugaenge"><div class="kartei-button kartei-number-1"><span class="kartei-button-body">Compact</span></div></a><a href="/paris-saint-germain/transfers/verein/583/saison_id/2018/pos//detailpos/0/w_s/s/plus/1#zugaenge"><div class="kartei-button second-kartei kartei-number-2 active-kartei"><span class="kartei-button-body">Detailed</span></div></a></div>
			<div class="responsive-table">
				<table>
					<thead>
						<tr>
							<th class="zentriert ma_pos"></th>
							<th>Player</th>
							<th class="zentriert">Age</th>
															<th class="rechts">Market value</th>
							<th class="zentriert">Nat.</th>
							<th>Left</th>
							<th class="rechts">Fee</th>
						</tr>
					</thead>
					<tbody>
													<tr>
								<td class="bg_Sturm ma_pos" title="Sturm"></td>
								<td>
									<table class="inline-table">
										<tr>
											<td rowspan="2">
												<img src="https://tmssl.akamaized.net//images/portrait/small/342229-1533629004.jpg?lm=1533629019" title="Kylian Mbappé" alt="Kylian Mbappé" class="bilderrahmen-fixed" />											</td>
											<td class="hauptlink">
	<a title="Kylian Mbappé" class="spielprofil_tooltip" id="342229" href="/kylian-mbappe/profil/spieler/342229">Kylian Mbappé</a>											</td>
										</tr>
										<tr>
											<td>Centre-Forward</td>
										</tr>
									</table>
								</td>
								<td class="zentriert">19</td>
																	<td class="rechts">€120.00m</td>
									<td class="zentriert"><img src="https://tmssl.akamaized.net//images/flagge/verysmall/50.png?lm=1520611569" title="France" alt="France" class="flaggenrahmen" /><br /><img src="https://tmssl.akamaized.net//images/flagge/verysmall/31.png?lm=1520611569" title="Cameroon" alt="Cameroon" class="flaggenrahmen" /></td>
								<td>
									<table class="inline-table">
										<tr>
											<td rowspan="2">
	<a class="vereinprofil_tooltip" id="162" href="/as-monaco/transfers/verein/162/saison_id/2018"><img src="https://tmssl.akamaized.net//images/wappen/verysmall/162.png?lm=1463176069" title="&nbsp;" alt="AS Monaco" class="" /></a>											</td>
											<td class="hauptlink">
	<a class="vereinprofil_tooltip" id="162" href="/as-monaco/transfers/verein/162/saison_id/2018">Monaco</a>											</td>
										</tr>
										<tr>
											<td> <img src="https://tmssl.akamaized.net//images/flagge/tiny/50.png?lm=1520611569" title="France" alt="France" class="flaggenrahmen" /><a title="Ligue 1" href="/ligue-1/transfers/wettbewerb/FR1">Ligue 1</a></td>
										</tr>
									</table>
								</td>
								<td class="rechts hauptlink "><a href="/jumplist/transfers/spieler/342229/transfer_id/2101599">€135.00m</a></td>
							</tr>
													<tr>
								<td class="bg_Abwehr ma_pos" title="Abwehr"></td>
								<td>
									<table class="inline-table">
										<tr>
											<td rowspan="2">
												<img src="https://tmssl.akamaized.net//images/portrait/small/228948-1531813344.jpg?lm=1531813403" title="Thilo Kehrer" alt="Thilo Kehrer" class="bilderrahmen-fixed" />											</td>
											<td class="hauptlink">
	<a title="Thilo Kehrer" class="spielprofil_tooltip" id="228948" href="/thilo-kehrer/profil/spieler/228948">Thilo Kehrer</a>											</td>
										</tr>
										<tr>
											<td>Centre-Back</td>
										</tr>
									</table>
								</td>
								<td class="zentriert">21</td>
																	<td class="rechts">€18.00m</td>
									<td class="zentriert"><img src="https://tmssl.akamaized.net//images/flagge/verysmall/40.png?lm=1520612525" title="Germany" alt="Germany" class="flaggenrahmen" /><br /><img src="https://tmssl.akamaized.net//images/flagge/verysmall/30.png?lm=1520611569" title="Burundi" alt="Burundi" class="flaggenrahmen" /></td>
								<td>
									<table class="inline-table">
										<tr>
											<td rowspan="2">
	<a class="vereinprofil_tooltip" id="33" href="/fc-schalke-04/transfers/verein/33/saison_id/2018"><img src="https://tmssl.akamaized.net//images/wappen/verysmall/33.png?lm=1433588238" title="&nbsp;" alt="FC Schalke 04" class="" /></a>											</td>
											<td class="hauptlink">
	<a class="vereinprofil_tooltip" id="33" href="/fc-schalke-04/transfers/verein/33/saison_id/2018">FC Schalke 04</a>											</td>
										</tr>
										<tr>
											<td> <img src="https://tmssl.akamaized.net//images/flagge/tiny/40.png?lm=1520612525" title="Germany" alt="Germany" class="flaggenrahmen" /><a title="Bundesliga" href="/1-bundesliga/transfers/wettbewerb/L1">Bundesliga</a></td>
										</tr>
									</table>
								</td>
								<td class="rechts hauptlink "><a href="/jumplist/transfers/spieler/228948/transfer_id/2226739">€37.00m</a></td>
							</tr>
													<tr>
								<td class="bg_Abwehr ma_pos" title="Abwehr"></td>
								<td>
									<table class="inline-table">
										<tr>
											<td rowspan="2">
												<img src="https://tmssl.akamaized.net//images/portrait/small/126719-1502276028.jpg?lm=1502276112" title="Juan Bernat" alt="Juan Bernat" class="bilderrahmen-fixed" />											</td>
											<td class="hauptlink">
	<a title="Juan Bernat" class="spielprofil_tooltip" id="126719" href="/juan-bernat/profil/spieler/126719">Juan Bernat</a>											</td>
										</tr>
										<tr>
											<td>Left-Back</td>
										</tr>
									</table>
								</td>
								<td class="zentriert">25</td>
																	<td class="rechts">€12.00m</td>
									<td class="zentriert"><img src="https://tmssl.akamaized.net//images/flagge/verysmall/157.png?lm=1520611569" title="Spain" alt="Spain" class="flaggenrahmen" /></td>
								<td>
									<table class="inline-table">
										<tr>
											<td rowspan="2">
	<a class="vereinprofil_tooltip" id="27" href="/fc-bayern-munchen/transfers/verein/27/saison_id/2018"><img src="https://tmssl.akamaized.net//images/wappen/verysmall/27.png?lm=1498251238" title="&nbsp;" alt="Bayern Munich" class="" /></a>											</td>
											<td class="hauptlink">
	<a class="vereinprofil_tooltip" id="27" href="/fc-bayern-munchen/transfers/verein/27/saison_id/2018">Bayern Munich </a>											</td>
										</tr>
										<tr>
											<td> <img src="https://tmssl.akamaized.net//images/flagge/tiny/40.png?lm=1520612525" title="Germany" alt="Germany" class="flaggenrahmen" /><a title="Bundesliga" href="/1-bundesliga/transfers/wettbewerb/L1">Bundesliga</a></td>
										</tr>
									</table>
								</td>
								<td class="rechts hauptlink "><a href="/jumplist/transfers/spieler/126719/transfer_id/2247647">€5.00m</a></td>
							</tr>
													<tr>
								<td class="bg_Torwart ma_pos" title="Torwart"></td>
								<td>
									<table class="inline-table">
										<tr>
											<td rowspan="2">
												<img src="https://tmssl.akamaized.net//images/portrait/small/5023-1448530267.jpg?lm=1448530280" title="Gianluigi Buffon" alt="Gianluigi Buffon" class="bilderrahmen-fixed" />											</td>
											<td class="hauptlink">
	<a title="Gianluigi Buffon" class="spielprofil_tooltip" id="5023" href="/gianluigi-buffon/profil/spieler/5023">Gianluigi Buffon</a>											</td>
										</tr>
										<tr>
											<td>Goalkeeper</td>
										</tr>
									</table>
								</td>
								<td class="zentriert">40</td>
																	<td class="rechts">€2.00m</td>
									<td class="zentriert"><img src="https://tmssl.akamaized.net//images/flagge/verysmall/75.png?lm=1520611569" title="Italy" alt="Italy" class="flaggenrahmen" /></td>
								<td>
									<table class="inline-table">
										<tr>
											<td rowspan="2">
	<a class="vereinprofil_tooltip" id="506" href="/juventus-turin/transfers/verein/506/saison_id/2018"><img src="https://tmssl.akamaized.net//images/wappen/verysmall/506.png?lm=1539869052" title="&nbsp;" alt="Juventus FC" class="" /></a>											</td>
											<td class="hauptlink">
	<a class="vereinprofil_tooltip" id="506" href="/juventus-turin/transfers/verein/506/saison_id/2018">Juventus</a>											</td>
										</tr>
										<tr>
											<td> <img src="https://tmssl.akamaized.net//images/flagge/tiny/75.png?lm=1520611569" title="Italy" alt="Italy" class="flaggenrahmen" /><a title="Serie A" href="/serie-a/transfers/wettbewerb/IT1">Serie A</a></td>
										</tr>
									</table>
								</td>
								<td class="rechts hauptlink "><a href="/jumplist/transfers/spieler/5023/transfer_id/2109618">Free Transfer</a></td>
							</tr>
													<tr>
								<td class="bg_Sturm ma_pos" title="Sturm"></td>
								<td>
									<table class="inline-table">
										<tr>
											<td rowspan="2">
												<img src="https://tmssl.akamaized.net//images/portrait/small/45660-1471339209.jpg?lm=1471339344" title="Eric Maxim Choupo-Moting" alt="Eric Maxim Choupo-Moting" class="bilderrahmen-fixed" />											</td>
											<td class="hauptlink">
	<a title="Eric Maxim Choupo-Moting" class="spielprofil_tooltip" id="45660" href="/eric-maxim-choupo-moting/profil/spieler/45660">Eric Maxim Choupo-Moting</a>											</td>
										</tr>
										<tr>
											<td>Centre-Forward</td>
										</tr>
									</table>
								</td>
								<td class="zentriert">29</td>
																	<td class="rechts">€8.00m</td>
									<td class="zentriert"><img src="https://tmssl.akamaized.net//images/flagge/verysmall/31.png?lm=1520611569" title="Cameroon" alt="Cameroon" class="flaggenrahmen" /><br /><img src="https://tmssl.akamaized.net//images/flagge/verysmall/40.png?lm=1520612525" title="Germany" alt="Germany" class="flaggenrahmen" /></td>
								<td>
									<table class="inline-table">
										<tr>
											<td rowspan="2">
	<a class="vereinprofil_tooltip" id="512" href="/stoke-city/transfers/verein/512/saison_id/2018"><img src="https://tmssl.akamaized.net//images/wappen/verysmall/512.png?lm=1472243727" title="&nbsp;" alt="Stoke City" class="" /></a>											</td>
											<td class="hauptlink">
	<a class="vereinprofil_tooltip" id="512" href="/stoke-city/transfers/verein/512/saison_id/2018">Stoke City</a>											</td>
										</tr>
										<tr>
											<td> <img src="https://tmssl.akamaized.net//images/flagge/tiny/189.png?lm=1520611569" title="England" alt="England" class="flaggenrahmen" /><a title="Championship" href="/championship/transfers/wettbewerb/GB2">Championship</a></td>
										</tr>
									</table>
								</td>
								<td class="rechts hauptlink "><a href="/jumplist/transfers/spieler/45660/transfer_id/2248191">Free Transfer</a></td>
							</tr>
													<tr>
								<td class="bg_Abwehr ma_pos" title="Abwehr"></td>
								<td>
									<table class="inline-table">
										<tr>
											<td rowspan="2">
												<img src="https://tmssl.akamaized.net//images/portrait/small/460629-1536754156.jpg?lm=1536754169" title="Colin Dagba" alt="Colin Dagba" class="bilderrahmen-fixed" />											</td>
											<td class="hauptlink">
	<a title="Colin Dagba" class="spielprofil_tooltip" id="460629" href="/colin-dagba/profil/spieler/460629">Colin Dagba</a>											</td>
										</tr>
										<tr>
											<td>Right-Back</td>
										</tr>
									</table>
								</td>
								<td class="zentriert">19</td>
																	<td class="rechts">-</td>
									<td class="zentriert"><img src="https://tmssl.akamaized.net//images/flagge/verysmall/50.png?lm=1520611569" title="France" alt="France" class="flaggenrahmen" /><br /><img src="https://tmssl.akamaized.net//images/flagge/verysmall/21.png?lm=1520611569" title="Benin" alt="Benin" class="flaggenrahmen" /></td>
								<td>
									<table class="inline-table">
										<tr>
											<td rowspan="2">
	<a class="vereinprofil_tooltip" id="8512" href="/fc-paris-saint-germain-b/transfers/verein/8512/saison_id/2018"><img src="https://tmssl.akamaized.net//images/wappen/verysmall/8512.png?lm=1464899851" title="&nbsp;" alt="FC Paris Saint-Germain B" class="" /></a>											</td>
											<td class="hauptlink">
	<a class="vereinprofil_tooltip" id="8512" href="/fc-paris-saint-germain-b/transfers/verein/8512/saison_id/2018">Paris SG B</a>											</td>
										</tr>
										<tr>
											<td> <img src="https://tmssl.akamaized.net//images/flagge/tiny/50.png?lm=1520611569" title="France" alt="France" class="flaggenrahmen" />France</td>
										</tr>
									</table>
								</td>
								<td class="rechts hauptlink "><a href="/jumplist/transfers/spieler/460629/transfer_id/2215151">-</a></td>
							</tr>
													<tr>
								<td class="bg_Mittelfeld ma_pos" title="Mittelfeld"></td>
								<td>
									<table class="inline-table">
										<tr>
											<td rowspan="2">
												<img src="https://tmssl.akamaized.net//images/portrait/small/395512-1536143827.jpg?lm=1536143866" title="Antoine Bernede" alt="Antoine Bernede" class="bilderrahmen-fixed" />											</td>
											<td class="hauptlink">
	<a title="Antoine Bernede" class="spielprofil_tooltip" id="395512" href="/antoine-bernede/profil/spieler/395512">Antoine Bernede</a>											</td>
										</tr>
										<tr>
											<td>Central Midfield</td>
										</tr>
									</table>
								</td>
								<td class="zentriert">19</td>
																	<td class="rechts">-</td>
									<td class="zentriert"><img src="https://tmssl.akamaized.net//images/flagge/verysmall/50.png?lm=1520611569" title="France" alt="France" class="flaggenrahmen" /></td>
								<td>
									<table class="inline-table">
										<tr>
											<td rowspan="2">
	<a class="vereinprofil_tooltip" id="8512" href="/fc-paris-saint-germain-b/transfers/verein/8512/saison_id/2018"><img src="https://tmssl.akamaized.net//images/wappen/verysmall/8512.png?lm=1464899851" title="&nbsp;" alt="FC Paris Saint-Germain B" class="" /></a>											</td>
											<td class="hauptlink">
	<a class="vereinprofil_tooltip" id="8512" href="/fc-paris-saint-germain-b/transfers/verein/8512/saison_id/2018">Paris SG B</a>											</td>
										</tr>
										<tr>
											<td> <img src="https://tmssl.akamaized.net//images/flagge/tiny/50.png?lm=1520611569" title="France" alt="France" class="flaggenrahmen" />France</td>
										</tr>
									</table>
								</td>
								<td class="rechts hauptlink "><a href="/jumplist/transfers/spieler/395512/transfer_id/2225556">-</a></td>
							</tr>
													<tr>
								<td class="bg_Abwehr ma_pos" title="Abwehr"></td>
								<td>
									<table class="inline-table">
										<tr>
											<td rowspan="2">
												<img src="https://tmssl.akamaized.net//images/portrait/small/371141-1535021058.jpg?lm=1535021076" title="Stanley N'Soki" alt="Stanley N'Soki" class="bilderrahmen-fixed" />											</td>
											<td class="hauptlink">
	<a title="Stanley N&#039;Soki" class="spielprofil_tooltip" id="371141" href="/stanley-nsoki/profil/spieler/371141">Stanley N'Soki</a>											</td>
										</tr>
										<tr>
											<td>Left-Back</td>
										</tr>
									</table>
								</td>
								<td class="zentriert">19</td>
																	<td class="rechts">-</td>
									<td class="zentriert"><img src="https://tmssl.akamaized.net//images/flagge/verysmall/50.png?lm=1520611569" title="France" alt="France" class="flaggenrahmen" /><br /><img src="https://tmssl.akamaized.net//images/flagge/verysmall/85.png?lm=1520611569" title="Congo" alt="Congo" class="flaggenrahmen" /></td>
								<td>
									<table class="inline-table">
										<tr>
											<td rowspan="2">
	<a class="vereinprofil_tooltip" id="8512" href="/fc-paris-saint-germain-b/transfers/verein/8512/saison_id/2018"><img src="https://tmssl.akamaized.net//images/wappen/verysmall/8512.png?lm=1464899851" title="&nbsp;" alt="FC Paris Saint-Germain B" class="" /></a>											</td>
											<td class="hauptlink">
	<a class="vereinprofil_tooltip" id="8512" href="/fc-paris-saint-germain-b/transfers/verein/8512/saison_id/2018">Paris SG B</a>											</td>
										</tr>
										<tr>
											<td> <img src="https://tmssl.akamaized.net//images/flagge/tiny/50.png?lm=1520611569" title="France" alt="France" class="flaggenrahmen" />France</td>
										</tr>
									</table>
								</td>
								<td class="rechts hauptlink "><a href="/jumplist/transfers/spieler/371141/transfer_id/2215150">-</a></td>
							</tr>
													<tr>
								<td class="bg_Sturm ma_pos" title="Sturm"></td>
								<td>
									<table class="inline-table">
										<tr>
											<td rowspan="2">
												<img src="https://tmssl.akamaized.net//images/portrait/small/395516-1517476712.png?lm=1517476720" title="Moussa Diaby" alt="Moussa Diaby" class="bilderrahmen-fixed" />											</td>
											<td class="hauptlink">
	<a title="Moussa Diaby" class="spielprofil_tooltip" id="395516" href="/moussa-diaby/profil/spieler/395516">Moussa Diaby</a>											</td>
										</tr>
										<tr>
											<td>Left Winger</td>
										</tr>
									</table>
								</td>
								<td class="zentriert">18</td>
																	<td class="rechts">€500k</td>
									<td class="zentriert"><img src="https://tmssl.akamaized.net//images/flagge/verysmall/50.png?lm=1520611569" title="France" alt="France" class="flaggenrahmen" /><br /><img src="https://tmssl.akamaized.net//images/flagge/verysmall/105.png?lm=1520611569" title="Mali" alt="Mali" class="flaggenrahmen" /></td>
								<td>
									<table class="inline-table">
										<tr>
											<td rowspan="2">
	<a class="vereinprofil_tooltip" id="8512" href="/fc-paris-saint-germain-b/transfers/verein/8512/saison_id/2018"><img src="https://tmssl.akamaized.net//images/wappen/verysmall/8512.png?lm=1464899851" title="&nbsp;" alt="FC Paris Saint-Germain B" class="" /></a>											</td>
											<td class="hauptlink">
	<a class="vereinprofil_tooltip" id="8512" href="/fc-paris-saint-germain-b/transfers/verein/8512/saison_id/2018">Paris SG B</a>											</td>
										</tr>
										<tr>
											<td> <img src="https://tmssl.akamaized.net//images/flagge/tiny/50.png?lm=1520611569" title="France" alt="France" class="flaggenrahmen" />France</td>
										</tr>
									</table>
								</td>
								<td class="rechts hauptlink "><a href="/jumplist/transfers/spieler/395516/transfer_id/2215154">-</a></td>
							</tr>
													<tr>
								<td class="bg_Sturm ma_pos" title="Sturm"></td>
								<td>
									<table class="inline-table">
										<tr>
											<td rowspan="2">
												<img src="https://tmssl.akamaized.net//images/portrait/small/370846-1499096768.jpg?lm=1499096777" title="Timothy Weah" alt="Timothy Weah" class="bilderrahmen-fixed" />											</td>
											<td class="hauptlink">
	<a title="Timothy Weah" class="spielprofil_tooltip" id="370846" href="/timothy-weah/profil/spieler/370846">Timothy Weah</a>											</td>
										</tr>
										<tr>
											<td>Centre-Forward</td>
										</tr>
									</table>
								</td>
								<td class="zentriert">18</td>
																	<td class="rechts">€1.00m</td>
									<td class="zentriert"><img src="https://tmssl.akamaized.net//images/flagge/verysmall/184.png?lm=1520611569" title="United States" alt="United States" class="flaggenrahmen" /><br /><img src="https://tmssl.akamaized.net//images/flagge/verysmall/50.png?lm=1520611569" title="France" alt="France" class="flaggenrahmen" /></td>
								<td>
									<table class="inline-table">
										<tr>
											<td rowspan="2">
	<a class="vereinprofil_tooltip" id="8512" href="/fc-paris-saint-germain-b/transfers/verein/8512/saison_id/2018"><img src="https://tmssl.akamaized.net//images/wappen/verysmall/8512.png?lm=1464899851" title="&nbsp;" alt="FC Paris Saint-Germain B" class="" /></a>											</td>
											<td class="hauptlink">
	<a class="vereinprofil_tooltip" id="8512" href="/fc-paris-saint-germain-b/transfers/verein/8512/saison_id/2018">Paris SG B</a>											</td>
										</tr>
										<tr>
											<td> <img src="https://tmssl.akamaized.net//images/flagge/tiny/50.png?lm=1520611569" title="France" alt="France" class="flaggenrahmen" />France</td>
										</tr>
									</table>
								</td>
								<td class="rechts hauptlink "><a href="/jumplist/transfers/spieler/370846/transfer_id/2157132">-</a></td>
							</tr>
													<tr>
								<td class="bg_Mittelfeld ma_pos" title="Mittelfeld"></td>
								<td>
									<table class="inline-table">
										<tr>
											<td rowspan="2">
												<img src="https://tmssl.akamaized.net//images/portrait/small/395236-1510668451.jpg?lm=1510668493" title="Yacine Adli" alt="Yacine Adli" class="bilderrahmen-fixed" />											</td>
											<td class="hauptlink">
	<a title="Yacine Adli" class="spielprofil_tooltip" id="395236" href="/yacine-adli/profil/spieler/395236">Yacine Adli</a>											</td>
										</tr>
										<tr>
											<td>Attacking Midfield</td>
										</tr>
									</table>
								</td>
								<td class="zentriert">17</td>
																	<td class="rechts">-</td>
									<td class="zentriert"><img src="https://tmssl.akamaized.net//images/flagge/verysmall/50.png?lm=1520611569" title="France" alt="France" class="flaggenrahmen" /><br /><img src="https://tmssl.akamaized.net//images/flagge/verysmall/4.png?lm=1520611569" title="Algeria" alt="Algeria" class="flaggenrahmen" /></td>
								<td>
									<table class="inline-table">
										<tr>
											<td rowspan="2">
	<a class="vereinprofil_tooltip" id="8512" href="/fc-paris-saint-germain-b/transfers/verein/8512/saison_id/2018"><img src="https://tmssl.akamaized.net//images/wappen/verysmall/8512.png?lm=1464899851" title="&nbsp;" alt="FC Paris Saint-Germain B" class="" /></a>											</td>
											<td class="hauptlink">
	<a class="vereinprofil_tooltip" id="8512" href="/fc-paris-saint-germain-b/transfers/verein/8512/saison_id/2018">Paris SG B</a>											</td>
										</tr>
										<tr>
											<td> <img src="https://tmssl.akamaized.net//images/flagge/tiny/50.png?lm=1520611569" title="France" alt="France" class="flaggenrahmen" />France</td>
										</tr>
									</table>
								</td>
								<td class="rechts hauptlink "><a href="/jumplist/transfers/spieler/395236/transfer_id/2215153">-</a></td>
							</tr>
																			<tr>
								<td class="bg_Mittelfeld ma_pos" title="Mittelfeld"></td>
								<td>
									<table class="inline-table">
										<tr>
											<td rowspan="2">
												<img src="https://tmssl.akamaized.net//images/portrait/small/324690-1432650646.jpg?lm=1433144332" title="Jonathan Ikoné" alt="Jonathan Ikoné" class="bilderrahmen" />											</td>
											<td class="hauptlink">
	<a title="Jonathan Ikoné" class="spielprofil_tooltip" id="324690" href="/jonathan-ikone/profil/spieler/324690">Jonathan Ikoné</a>											</td>
										</tr>
										<tr>
											<td>Attacking Midfield</td>
										</tr>
									</table>
								</td>
								<td class="zentriert">20</td>
																	<td class="rechts">€700k</td>
									<td class="zentriert"><img src="https://tmssl.akamaized.net//images/flagge/verysmall/50.png?lm=1520611569" title="France" alt="France" class="flaggenrahmen" /><br /><img src="https://tmssl.akamaized.net//images/flagge/verysmall/193.png?lm=1520611569" title="DR Congo" alt="DR Congo" class="flaggenrahmen" /></td>
								<td>
									<table class="inline-table">
										<tr>
											<td rowspan="2">
												<a class="vereinprofil_tooltip" id="969" href="/hsc-montpellier/transfers/verein/969/saison_id/2017"><img src="https://tmssl.akamaized.net//images/wappen/verysmall/969.png?lm=1459072367" title="&nbsp;" alt="HSC Montpellier" class="" /></a>											</td>
											<td class="hauptlink">
	<a class="vereinprofil_tooltip" id="969" href="/hsc-montpellier/transfers/verein/969/saison_id/2017">Montpellier</a>											</td>
										</tr>
										<tr>
											<td> <img src="https://tmssl.akamaized.net//images/flagge/tiny/50.png?lm=1520611569" title="France" alt="France" class="flaggenrahmen" /><a title="Ligue 1" href="/ligue-1/transfers/wettbewerb/FR1">Ligue 1</a></td>
										</tr>
									</table>
								</td>
								<td class="rechts hauptlink "><a href="/jumplist/transfers/spieler/324690/transfer_id/1825782">End of loan<br /><i class="normaler-text">Jun 30, 2018</i></a></td>
							</tr>
												<tr>
								<td class="bg_Mittelfeld ma_pos" title="Mittelfeld"></td>
								<td>
									<table class="inline-table">
										<tr>
											<td rowspan="2">
												<img src="https://tmssl.akamaized.net//images/portrait/small/45184-1447240173.jpg?lm=1447240212" title="Grzegorz Krychowiak" alt="Grzegorz Krychowiak" class="bilderrahmen" />											</td>
											<td class="hauptlink">
	<a title="Grzegorz Krychowiak" class="spielprofil_tooltip" id="45184" href="/grzegorz-krychowiak/profil/spieler/45184">Grzegorz Krychowiak</a>											</td>
										</tr>
										<tr>
											<td>Defensive Midfield</td>
										</tr>
									</table>
								</td>
								<td class="zentriert">28</td>
																	<td class="rechts">€18.00m</td>
									<td class="zentriert"><img src="https://tmssl.akamaized.net//images/flagge/verysmall/135.png?lm=1520611569" title="Poland" alt="Poland" class="flaggenrahmen" /></td>
								<td>
									<table class="inline-table">
										<tr>
											<td rowspan="2">
												<a class="vereinprofil_tooltip" id="984" href="/west-bromwich-albion/transfers/verein/984/saison_id/2017"><img src="https://tmssl.akamaized.net//images/wappen/verysmall/984.png?lm=1457991758" title="&nbsp;" alt="West Bromwich Albion" class="" /></a>											</td>
											<td class="hauptlink">
	<a class="vereinprofil_tooltip" id="984" href="/west-bromwich-albion/transfers/verein/984/saison_id/2017">West Brom</a>											</td>
										</tr>
										<tr>
											<td> <img src="https://tmssl.akamaized.net//images/flagge/tiny/189.png?lm=1520611569" title="England" alt="England" class="flaggenrahmen" /><a title="Premier League" href="/premier-league/transfers/wettbewerb/GB1">Premier League</a></td>
										</tr>
									</table>
								</td>
								<td class="rechts hauptlink "><a href="/jumplist/transfers/spieler/45184/transfer_id/1898437">End of loan<br /><i class="normaler-text">Jun 30, 2018</i></a></td>
							</tr>
												<tr>
								<td class="bg_Torwart ma_pos" title="Torwart"></td>
								<td>
									<table class="inline-table">
										<tr>
											<td rowspan="2">
												<img src="https://tmssl.akamaized.net//images/portrait/small/282028-1493193759.jpg?lm=1493193783" title="Rémy Descamps" alt="Rémy Descamps" class="bilderrahmen" />											</td>
											<td class="hauptlink">
	<a title="Rémy Descamps" class="spielprofil_tooltip" id="282028" href="/remy-descamps/profil/spieler/282028">Rémy Descamps</a>											</td>
										</tr>
										<tr>
											<td>Goalkeeper</td>
										</tr>
									</table>
								</td>
								<td class="zentriert">22</td>
																	<td class="rechts">€600k</td>
									<td class="zentriert"><img src="https://tmssl.akamaized.net//images/flagge/verysmall/50.png?lm=1520611569" title="France" alt="France" class="flaggenrahmen" /></td>
								<td>
									<table class="inline-table">
										<tr>
											<td rowspan="2">
												<a class="vereinprofil_tooltip" id="3161" href="/fc-tours/transfers/verein/3161/saison_id/2017"><img src="https://tmssl.akamaized.net//images/wappen/verysmall/3161.png?lm=1408780690" title="&nbsp;" alt="Tours FC" class="" /></a>											</td>
											<td class="hauptlink">
	<a class="vereinprofil_tooltip" id="3161" href="/fc-tours/transfers/verein/3161/saison_id/2017">Tours FC</a>											</td>
										</tr>
										<tr>
											<td> <img src="https://tmssl.akamaized.net//images/flagge/tiny/50.png?lm=1520611569" title="France" alt="France" class="flaggenrahmen" /><a title="Ligue 2" href="/ligue-2/transfers/wettbewerb/FR2">Ligue 2</a></td>
										</tr>
									</table>
								</td>
								<td class="rechts hauptlink "><a href="/jumplist/transfers/spieler/282028/transfer_id/1983563">End of loan<br /><i class="normaler-text">Jun 30, 2018</i></a></td>
							</tr>
												<tr>
								<td class="bg_Sturm ma_pos" title="Sturm"></td>
								<td>
									<table class="inline-table">
										<tr>
											<td rowspan="2">
												<img src="https://tmssl.akamaized.net//images/portrait/small/134936-1413207167.jpg?lm=1433143616" title="Jesé" alt="Jesé" class="bilderrahmen" />											</td>
											<td class="hauptlink">
	<a title="Jesé" class="spielprofil_tooltip" id="134936" href="/jese/profil/spieler/134936">Jesé</a>											</td>
										</tr>
										<tr>
											<td>Left Winger</td>
										</tr>
									</table>
								</td>
								<td class="zentriert">25</td>
																	<td class="rechts">€7.50m</td>
									<td class="zentriert"><img src="https://tmssl.akamaized.net//images/flagge/verysmall/157.png?lm=1520611569" title="Spain" alt="Spain" class="flaggenrahmen" /></td>
								<td>
									<table class="inline-table">
										<tr>
											<td rowspan="2">
												<a class="vereinprofil_tooltip" id="512" href="/stoke-city/transfers/verein/512/saison_id/2017"><img src="https://tmssl.akamaized.net//images/wappen/verysmall/512.png?lm=1472243727" title="&nbsp;" alt="Stoke City" class="" /></a>											</td>
											<td class="hauptlink">
	<a class="vereinprofil_tooltip" id="512" href="/stoke-city/transfers/verein/512/saison_id/2017">Stoke City</a>											</td>
										</tr>
										<tr>
											<td> <img src="https://tmssl.akamaized.net//images/flagge/tiny/189.png?lm=1520611569" title="England" alt="England" class="flaggenrahmen" /><a title="Premier League" href="/premier-league/transfers/wettbewerb/GB1">Premier League</a></td>
										</tr>
									</table>
								</td>
								<td class="rechts hauptlink "><a href="/jumplist/transfers/spieler/134936/transfer_id/1882097">End of loan<br /><i class="normaler-text">Jun 30, 2018</i></a></td>
							</tr>
												<tr>
								<td class="bg_Sturm ma_pos" title="Sturm"></td>
								<td>
									<table class="inline-table">
										<tr>
											<td rowspan="2">
												<img src="https://tmssl.akamaized.net//images/portrait/small/225122-1474545654.jpg?lm=1474545663" title="Gonçalo Guedes" alt="Gonçalo Guedes" class="bilderrahmen" />											</td>
											<td class="hauptlink">
	<a title="Gonçalo Guedes" class="spielprofil_tooltip" id="225122" href="/goncalo-guedes/profil/spieler/225122">Gonçalo Guedes</a>											</td>
										</tr>
										<tr>
											<td>Left Winger</td>
										</tr>
									</table>
								</td>
								<td class="zentriert">21</td>
																	<td class="rechts">€40.00m</td>
									<td class="zentriert"><img src="https://tmssl.akamaized.net//images/flagge/verysmall/136.png?lm=1520611569" title="Portugal" alt="Portugal" class="flaggenrahmen" /></td>
								<td>
									<table class="inline-table">
										<tr>
											<td rowspan="2">
												<a class="vereinprofil_tooltip" id="1049" href="/fc-valencia/transfers/verein/1049/saison_id/2017"><img src="https://tmssl.akamaized.net//images/wappen/verysmall/1049.png?lm=1406966320" title="&nbsp;" alt="Valencia CF" class="" /></a>											</td>
											<td class="hauptlink">
	<a class="vereinprofil_tooltip" id="1049" href="/fc-valencia/transfers/verein/1049/saison_id/2017">Valencia</a>											</td>
										</tr>
										<tr>
											<td> <img src="https://tmssl.akamaized.net//images/flagge/tiny/157.png?lm=1520611569" title="Spain" alt="Spain" class="flaggenrahmen" /><a title="LaLiga" href="/primera-division/transfers/wettbewerb/ES1">LaLiga</a></td>
										</tr>
									</table>
								</td>
								<td class="rechts hauptlink "><a href="/jumplist/transfers/spieler/225122/transfer_id/1901757">End of loan<br /><i class="normaler-text">Jun 30, 2018</i></a></td>
							</tr>
												<tr>
								<td class="bg_Sturm ma_pos" title="Sturm"></td>
								<td>
									<table class="inline-table">
										<tr>
											<td rowspan="2">
												<img src="https://tmssl.akamaized.net//images/portrait/small/164897-1448353453.jpg?lm=1448353535" title="Jean-Christophe Bahebeck" alt="Jean-Christophe Bahebeck" class="bilderrahmen" />											</td>
											<td class="hauptlink">
	<a title="Jean-Christophe Bahebeck" class="spielprofil_tooltip" id="164897" href="/jean-christophe-bahebeck/profil/spieler/164897">Jean-Christophe Bahebeck</a>											</td>
										</tr>
										<tr>
											<td>Centre-Forward</td>
										</tr>
									</table>
								</td>
								<td class="zentriert">25</td>
																	<td class="rechts">€1.50m</td>
									<td class="zentriert"><img src="https://tmssl.akamaized.net//images/flagge/verysmall/50.png?lm=1520611569" title="France" alt="France" class="flaggenrahmen" /><br /><img src="https://tmssl.akamaized.net//images/flagge/verysmall/31.png?lm=1520611569" title="Cameroon" alt="Cameroon" class="flaggenrahmen" /></td>
								<td>
									<table class="inline-table">
										<tr>
											<td rowspan="2">
												<a class="vereinprofil_tooltip" id="200" href="/fc-utrecht/transfers/verein/200/saison_id/2017"><img src="https://tmssl.akamaized.net//images/wappen/verysmall/200.png?lm=1406448647" title="&nbsp;" alt="FC Utrecht" class="" /></a>											</td>
											<td class="hauptlink">
	<a class="vereinprofil_tooltip" id="200" href="/fc-utrecht/transfers/verein/200/saison_id/2017">FC Utrecht</a>											</td>
										</tr>
										<tr>
											<td> <img src="https://tmssl.akamaized.net//images/flagge/tiny/122.png?lm=1520611569" title="Netherlands" alt="Netherlands" class="flaggenrahmen" /><a title="Eredivisie" href="/eredivisie/transfers/wettbewerb/NL1">Eredivisie</a></td>
										</tr>
									</table>
								</td>
								<td class="rechts hauptlink "><a href="/jumplist/transfers/spieler/164897/transfer_id/1877252">End of loan<br /><i class="normaler-text">Jun 30, 2018</i></a></td>
							</tr>
												<tr>
								<td class="bg_Sturm ma_pos" title="Sturm"></td>
								<td>
									<table class="inline-table">
										<tr>
											<td rowspan="2">
												<img src="https://tmssl.akamaized.net//images/portrait/small/344152-1432650353.jpg?lm=1433144398" title="Odsonne Edouard" alt="Odsonne Edouard" class="bilderrahmen" />											</td>
											<td class="hauptlink">
	<a title="Odsonne Edouard" class="spielprofil_tooltip" id="344152" href="/odsonne-edouard/profil/spieler/344152">Odsonne Edouard</a>											</td>
										</tr>
										<tr>
											<td>Centre-Forward</td>
										</tr>
									</table>
								</td>
								<td class="zentriert">20</td>
																	<td class="rechts">€1.50m</td>
									<td class="zentriert"><img src="https://tmssl.akamaized.net//images/flagge/verysmall/50.png?lm=1520611569" title="France" alt="France" class="flaggenrahmen" /><br /><img src="https://tmssl.akamaized.net//images/flagge/verysmall/252.png?lm=1520611569" title="French Guiana" alt="French Guiana" class="flaggenrahmen" /></td>
								<td>
									<table class="inline-table">
										<tr>
											<td rowspan="2">
												<a class="vereinprofil_tooltip" id="371" href="/celtic-glasgow/transfers/verein/371/saison_id/2017"><img src="https://tmssl.akamaized.net//images/wappen/verysmall/371.png?lm=1403615766" title="&nbsp;" alt="Celtic FC" class="" /></a>											</td>
											<td class="hauptlink">
	<a class="vereinprofil_tooltip" id="371" href="/celtic-glasgow/transfers/verein/371/saison_id/2017">Celtic</a>											</td>
										</tr>
										<tr>
											<td> <img src="https://tmssl.akamaized.net//images/flagge/tiny/190.png?lm=1520611569" title="Scotland" alt="Scotland" class="flaggenrahmen" /><a title="Scottish Premiership" href="/scottish-premiership/transfers/wettbewerb/SC1">Scottish Premiership</a></td>
										</tr>
									</table>
								</td>
								<td class="rechts hauptlink "><a href="/jumplist/transfers/spieler/344152/transfer_id/1901018">End of loan<br /><i class="normaler-text">Jun 30, 2018</i></a></td>
							</tr>
										</tbody>
						<tfoot>
							<tr>
								<td colspan="7" class="rechts">Sum: 177,00 mil. €</td>
							</tr>
							<tr>
								<td colspan="7" class="rechts">Average age of arrivals: 22,5</td>
							</tr>
							<tr>
								<td colspan="7" class="rechts">Total market value arrivals: 231,30 mil. €</td>
							</tr>
						</tfoot>
				</table>
			</div>
		</div>

		<div class="box">
			<div class="table-header"><a name="abgaenge" class="anchor">Departures</a></div>

<div class="kartei-button-bar">
    <a href="/paris-saint-germain/transfers/verein/583/saison_id/2018/pos//detailpos/0/w_s/s#abgaenge"><div class="kartei-button kartei-number-1"><span class="kartei-button-body">Compact</span></div></a><a href="/paris-saint-germain/transfers/verein/583/saison_id/2018/pos//detailpos/0/w_s/s/plus/1#abgaenge"><div class="kartei-button second-kartei kartei-number-2 active-kartei"><span class="kartei-button-body">Detailed</span></div></a></div>
			<div class="responsive-table">
				<table>
					<thead>
						<tr>
							<th class="zentriert ma_pos"></th>
							<th>Player</th>
							<th class="zentriert">Age</th>
								<th class="rechts">Market value</th>
							<th class="zentriert">Nat.</th>
							<th>Joined</th>
							<th class="rechts">Fee</th>
						</tr>
					</thead>
					<tbody>
													<tr>
								<td class="bg_Sturm ma_pos" title="Sturm"></td>
								<td>
									<table class="inline-table">
										<tr>
											<td rowspan="2">
												<img src="https://tmssl.akamaized.net//images/portrait/small/225122-1474545654.jpg?lm=1474545663" title="Gonçalo Guedes" alt="Gonçalo Guedes" class="bilderrahmen-fixed" />											</td>
											<td class="hauptlink">
	<a title="Gonçalo Guedes" class="spielprofil_tooltip" id="225122" href="/goncalo-guedes/profil/spieler/225122">Gonçalo Guedes</a>											</td>
										</tr>
										<tr>
											<td>Left Winger</td>
										</tr>
									</table>
								</td>
								<td class="zentriert">21</td>
										<td class="rechts">€40.00m</td>
									<td class="zentriert"><img src="https://tmssl.akamaized.net//images/flagge/verysmall/136.png?lm=1520611569" title="Portugal" alt="Portugal" class="flaggenrahmen" /></td>
								<td>
									<table class="inline-table">
										<tr>
											<td rowspan="2">
												<a class="vereinprofil_tooltip" id="1049" href="/fc-valencia/transfers/verein/1049/saison_id/2018"><img src="https://tmssl.akamaized.net//images/wappen/verysmall/1049.png?lm=1406966320" title="&nbsp;" alt="Valencia CF" class="" /></a>											</td>
											<td class="hauptlink">
	<a class="vereinprofil_tooltip" id="1049" href="/fc-valencia/transfers/verein/1049/saison_id/2018">Valencia</a>											</td>
										</tr>
										<tr>
											<td> <img src="https://tmssl.akamaized.net//images/flagge/tiny/157.png?lm=1520611569" title="Spain" alt="Spain" class="flaggenrahmen" /><a title="LaLiga" href="/primera-division/transfers/wettbewerb/ES1">LaLiga</a></td>
										</tr>
									</table>
								</td>
								<td class="rechts hauptlink "><a href="/jumplist/transfers/spieler/225122/transfer_id/2241354">€40.00m</a></td>
							</tr>
													<tr>
								<td class="bg_Mittelfeld ma_pos" title="Mittelfeld"></td>
								<td>
									<table class="inline-table">
										<tr>
											<td rowspan="2">
												<img src="https://tmssl.akamaized.net//images/portrait/small/55215-1408353496.jpg?lm=1433144737" title="Javier Pastore" alt="Javier Pastore" class="bilderrahmen-fixed" />											</td>
											<td class="hauptlink">
	<a title="Javier Pastore" class="spielprofil_tooltip" id="55215" href="/javier-pastore/profil/spieler/55215">Javier Pastore</a>											</td>
										</tr>
										<tr>
											<td>Attacking Midfield</td>
										</tr>
									</table>
								</td>
								<td class="zentriert">29</td>
										<td class="rechts">€15.00m</td>
									<td class="zentriert"><img src="https://tmssl.akamaized.net//images/flagge/verysmall/9.png?lm=1520611569" title="Argentina" alt="Argentina" class="flaggenrahmen" /><br /><img src="https://tmssl.akamaized.net//images/flagge/verysmall/75.png?lm=1520611569" title="Italy" alt="Italy" class="flaggenrahmen" /></td>
								<td>
									<table class="inline-table">
										<tr>
											<td rowspan="2">
												<a class="vereinprofil_tooltip" id="12" href="/as-rom/transfers/verein/12/saison_id/2018"><img src="https://tmssl.akamaized.net//images/wappen/verysmall/12.png?lm=1533302889" title="&nbsp;" alt="AS Roma" class="" /></a>											</td>
											<td class="hauptlink">
	<a class="vereinprofil_tooltip" id="12" href="/as-rom/transfers/verein/12/saison_id/2018">AS Roma</a>											</td>
										</tr>
										<tr>
											<td> <img src="https://tmssl.akamaized.net//images/flagge/tiny/75.png?lm=1520611569" title="Italy" alt="Italy" class="flaggenrahmen" /><a title="Serie A" href="/serie-a/transfers/wettbewerb/IT1">Serie A</a></td>
										</tr>
									</table>
								</td>
								<td class="rechts hauptlink "><a href="/jumplist/transfers/spieler/55215/transfer_id/2149270">€24.70m</a></td>
							</tr>
													<tr>
								<td class="bg_Abwehr ma_pos" title="Abwehr"></td>
								<td>
									<table class="inline-table">
										<tr>
											<td rowspan="2">
												<img src="https://tmssl.akamaized.net//images/portrait/small/61812-1447313783.jpg?lm=1447313813" title="Yuri Berchiche" alt="Yuri Berchiche" class="bilderrahmen-fixed" />											</td>
											<td class="hauptlink">
	<a title="Yuri Berchiche" class="spielprofil_tooltip" id="61812" href="/yuri-berchiche/profil/spieler/61812">Yuri Berchiche</a>											</td>
										</tr>
										<tr>
											<td>Left-Back</td>
										</tr>
									</table>
								</td>
								<td class="zentriert">28</td>
										<td class="rechts">€17.00m</td>
									<td class="zentriert"><img src="https://tmssl.akamaized.net//images/flagge/verysmall/157.png?lm=1520611569" title="Spain" alt="Spain" class="flaggenrahmen" /></td>
								<td>
									<table class="inline-table">
										<tr>
											<td rowspan="2">
												<a class="vereinprofil_tooltip" id="621" href="/athletic-bilbao/transfers/verein/621/saison_id/2018"><img src="https://tmssl.akamaized.net//images/wappen/verysmall/621.png?lm=1455649475" title="&nbsp;" alt="Athletic Bilbao" class="" /></a>											</td>
											<td class="hauptlink">
	<a class="vereinprofil_tooltip" id="621" href="/athletic-bilbao/transfers/verein/621/saison_id/2018">Athletic</a>											</td>
										</tr>
										<tr>
											<td> <img src="https://tmssl.akamaized.net//images/flagge/tiny/157.png?lm=1520611569" title="Spain" alt="Spain" class="flaggenrahmen" /><a title="LaLiga" href="/primera-division/transfers/wettbewerb/ES1">LaLiga</a></td>
										</tr>
									</table>
								</td>
								<td class="rechts hauptlink "><a href="/jumplist/transfers/spieler/61812/transfer_id/2156229">€24.00m</a></td>
							</tr>
													<tr>
								<td class="bg_Sturm ma_pos" title="Sturm"></td>
								<td>
									<table class="inline-table">
										<tr>
											<td rowspan="2">
												<img src="https://tmssl.akamaized.net//images/portrait/small/344152-1432650353.jpg?lm=1433144398" title="Odsonne Edouard" alt="Odsonne Edouard" class="bilderrahmen-fixed" />											</td>
											<td class="hauptlink">
	<a title="Odsonne Edouard" class="spielprofil_tooltip" id="344152" href="/odsonne-edouard/profil/spieler/344152">Odsonne Edouard</a>											</td>
										</tr>
										<tr>
											<td>Centre-Forward</td>
										</tr>
									</table>
								</td>
								<td class="zentriert">20</td>
										<td class="rechts">€1.50m</td>
									<td class="zentriert"><img src="https://tmssl.akamaized.net//images/flagge/verysmall/50.png?lm=1520611569" title="France" alt="France" class="flaggenrahmen" /><br /><img src="https://tmssl.akamaized.net//images/flagge/verysmall/252.png?lm=1520611569" title="French Guiana" alt="French Guiana" class="flaggenrahmen" /></td>
								<td>
									<table class="inline-table">
										<tr>
											<td rowspan="2">
												<a class="vereinprofil_tooltip" id="371" href="/celtic-glasgow/transfers/verein/371/saison_id/2018"><img src="https://tmssl.akamaized.net//images/wappen/verysmall/371.png?lm=1403615766" title="&nbsp;" alt="Celtic FC" class="" /></a>											</td>
											<td class="hauptlink">
	<a class="vereinprofil_tooltip" id="371" href="/celtic-glasgow/transfers/verein/371/saison_id/2018">Celtic</a>											</td>
										</tr>
										<tr>
											<td> <img src="https://tmssl.akamaized.net//images/flagge/tiny/190.png?lm=1520611569" title="Scotland" alt="Scotland" class="flaggenrahmen" /><a title="Scottish Premiership" href="/scottish-premiership/transfers/wettbewerb/SC1">Scottish Premiership</a></td>
										</tr>
									</table>
								</td>
								<td class="rechts hauptlink "><a href="/jumplist/transfers/spieler/344152/transfer_id/2134426">€10.30m</a></td>
							</tr>
													<tr>
								<td class="bg_Mittelfeld ma_pos" title="Mittelfeld"></td>
								<td>
									<table class="inline-table">
										<tr>
											<td rowspan="2">
												<img src="https://tmssl.akamaized.net//images/portrait/small/324690-1432650646.jpg?lm=1433144332" title="Jonathan Ikoné" alt="Jonathan Ikoné" class="bilderrahmen-fixed" />											</td>
											<td class="hauptlink">
	<a title="Jonathan Ikoné" class="spielprofil_tooltip" id="324690" href="/jonathan-ikone/profil/spieler/324690">Jonathan Ikoné</a>											</td>
										</tr>
										<tr>
											<td>Attacking Midfield</td>
										</tr>
									</table>
								</td>
								<td class="zentriert">20</td>
										<td class="rechts">€700k</td>
									<td class="zentriert"><img src="https://tmssl.akamaized.net//images/flagge/verysmall/50.png?lm=1520611569" title="France" alt="France" class="flaggenrahmen" /><br /><img src="https://tmssl.akamaized.net//images/flagge/verysmall/193.png?lm=1520611569" title="DR Congo" alt="DR Congo" class="flaggenrahmen" /></td>
								<td>
									<table class="inline-table">
										<tr>
											<td rowspan="2">
												<a class="vereinprofil_tooltip" id="1082" href="/osc-lille/transfers/verein/1082/saison_id/2018"><img src="https://tmssl.akamaized.net//images/wappen/verysmall/1082.png?lm=1529521041" title="&nbsp;" alt="LOSC Lille" class="" /></a>											</td>
											<td class="hauptlink">
	<a class="vereinprofil_tooltip" id="1082" href="/osc-lille/transfers/verein/1082/saison_id/2018">LOSC Lille</a>											</td>
										</tr>
										<tr>
											<td> <img src="https://tmssl.akamaized.net//images/flagge/tiny/50.png?lm=1520611569" title="France" alt="France" class="flaggenrahmen" /><a title="Ligue 1" href="/ligue-1/transfers/wettbewerb/FR1">Ligue 1</a></td>
										</tr>
									</table>
								</td>
								<td class="rechts hauptlink "><a href="/jumplist/transfers/spieler/324690/transfer_id/2156562">€5.00m</a></td>
							</tr>
													<tr>
								<td class="bg_Mittelfeld ma_pos" title="Mittelfeld"></td>
								<td>
									<table class="inline-table">
										<tr>
											<td rowspan="2">
												<img src="https://tmssl.akamaized.net//images/portrait/small/348795-1474546402.jpg?lm=1474546410" title="Giovani Lo Celso" alt="Giovani Lo Celso" class="bilderrahmen-fixed" />											</td>
											<td class="hauptlink">
	<a title="Giovani Lo Celso" class="spielprofil_tooltip" id="348795" href="/giovani-lo-celso/profil/spieler/348795">Giovani Lo Celso</a>											</td>
										</tr>
										<tr>
											<td>Central Midfield</td>
										</tr>
									</table>
								</td>
								<td class="zentriert">22</td>
										<td class="rechts">€30.00m</td>
									<td class="zentriert"><img src="https://tmssl.akamaized.net//images/flagge/verysmall/9.png?lm=1520611569" title="Argentina" alt="Argentina" class="flaggenrahmen" /><br /><img src="https://tmssl.akamaized.net//images/flagge/verysmall/75.png?lm=1520611569" title="Italy" alt="Italy" class="flaggenrahmen" /></td>
								<td>
									<table class="inline-table">
										<tr>
											<td rowspan="2">
												<a class="vereinprofil_tooltip" id="150" href="/real-betis-sevilla/transfers/verein/150/saison_id/2018"><img src="https://tmssl.akamaized.net//images/wappen/verysmall/150.png?lm=1407484550" title="&nbsp;" alt="Real Betis Balompié" class="" /></a>											</td>
											<td class="hauptlink">
	<a class="vereinprofil_tooltip" id="150" href="/real-betis-sevilla/transfers/verein/150/saison_id/2018">Real Betis</a>											</td>
										</tr>
										<tr>
											<td> <img src="https://tmssl.akamaized.net//images/flagge/tiny/157.png?lm=1520611569" title="Spain" alt="Spain" class="flaggenrahmen" /><a title="LaLiga" href="/primera-division/transfers/wettbewerb/ES1">LaLiga</a></td>
										</tr>
									</table>
								</td>
								<td class="rechts hauptlink "><a href="/jumplist/transfers/spieler/348795/transfer_id/2248126">Loan fee:<br /><i class="normaler-text">€2.00m</i></a></td>
							</tr>
													<tr>
								<td class="bg_Mittelfeld ma_pos" title="Mittelfeld"></td>
								<td>
									<table class="inline-table">
										<tr>
											<td rowspan="2">
												<img src="https://tmssl.akamaized.net//images/portrait/small/45184-1447240173.jpg?lm=1447240212" title="Grzegorz Krychowiak" alt="Grzegorz Krychowiak" class="bilderrahmen-fixed" />											</td>
											<td class="hauptlink">
	<a title="Grzegorz Krychowiak" class="spielprofil_tooltip" id="45184" href="/grzegorz-krychowiak/profil/spieler/45184">Grzegorz Krychowiak</a>											</td>
										</tr>
										<tr>
											<td>Defensive Midfield</td>
										</tr>
									</table>
								</td>
								<td class="zentriert">28</td>
										<td class="rechts">€18.00m</td>
									<td class="zentriert"><img src="https://tmssl.akamaized.net//images/flagge/verysmall/135.png?lm=1520611569" title="Poland" alt="Poland" class="flaggenrahmen" /></td>
								<td>
									<table class="inline-table">
										<tr>
											<td rowspan="2">
												<a class="vereinprofil_tooltip" id="932" href="/lokomotiv-moskau/transfers/verein/932/saison_id/2018"><img src="https://tmssl.akamaized.net//images/wappen/verysmall/932.png?lm=1486195738" title="&nbsp;" alt="Lokomotiv Moscow" class="" /></a>											</td>
											<td class="hauptlink">
	<a class="vereinprofil_tooltip" id="932" href="/lokomotiv-moskau/transfers/verein/932/saison_id/2018">Loko Moscow</a>											</td>
										</tr>
										<tr>
											<td> <img src="https://tmssl.akamaized.net//images/flagge/tiny/141.png?lm=1520611569" title="Russia" alt="Russia" class="flaggenrahmen" /><a title="Premier Liga" href="/premier-liga/transfers/wettbewerb/RU1">Premier Liga</a></td>
										</tr>
									</table>
								</td>
								<td class="rechts hauptlink "><a href="/jumplist/transfers/spieler/45184/transfer_id/2193034">Loan fee:<br /><i class="normaler-text">€1.00m</i></a></td>
							</tr>
													<tr>
								<td class="bg_Sturm ma_pos" title="Sturm"></td>
								<td>
									<table class="inline-table">
										<tr>
											<td rowspan="2">
												<img src="https://tmssl.akamaized.net//images/portrait/small/164897-1448353453.jpg?lm=1448353535" title="Jean-Christophe Bahebeck" alt="Jean-Christophe Bahebeck" class="bilderrahmen-fixed" />											</td>
											<td class="hauptlink">
	<a title="Jean-Christophe Bahebeck" class="spielprofil_tooltip" id="164897" href="/jean-christophe-bahebeck/profil/spieler/164897">Jean-Christophe Bahebeck</a>											</td>
										</tr>
										<tr>
											<td>Centre-Forward</td>
										</tr>
									</table>
								</td>
								<td class="zentriert">25</td>
										<td class="rechts">€1.50m</td>
									<td class="zentriert"><img src="https://tmssl.akamaized.net//images/flagge/verysmall/50.png?lm=1520611569" title="France" alt="France" class="flaggenrahmen" /><br /><img src="https://tmssl.akamaized.net//images/flagge/verysmall/31.png?lm=1520611569" title="Cameroon" alt="Cameroon" class="flaggenrahmen" /></td>
								<td>
									<table class="inline-table">
										<tr>
											<td rowspan="2">
												<a class="vereinprofil_tooltip" id="200" href="/fc-utrecht/transfers/verein/200/saison_id/2018"><img src="https://tmssl.akamaized.net//images/wappen/verysmall/200.png?lm=1406448647" title="&nbsp;" alt="FC Utrecht" class="" /></a>											</td>
											<td class="hauptlink">
	<a class="vereinprofil_tooltip" id="200" href="/fc-utrecht/transfers/verein/200/saison_id/2018">FC Utrecht</a>											</td>
										</tr>
										<tr>
											<td> <img src="https://tmssl.akamaized.net//images/flagge/tiny/122.png?lm=1520611569" title="Netherlands" alt="Netherlands" class="flaggenrahmen" /><a title="Eredivisie" href="/eredivisie/transfers/wettbewerb/NL1">Eredivisie</a></td>
										</tr>
									</table>
								</td>
								<td class="rechts hauptlink "><a href="/jumplist/transfers/spieler/164897/transfer_id/2248146">Free Transfer</a></td>
							</tr>
													<tr>
								<td class="bg_Torwart ma_pos" title="Torwart"></td>
								<td>
									<table class="inline-table">
										<tr>
											<td rowspan="2">
												<img src="https://tmssl.akamaized.net//images/portrait/small/45672-1407140095.jpg?lm=1433144613" title="Kevin Trapp" alt="Kevin Trapp" class="bilderrahmen-fixed" />											</td>
											<td class="hauptlink">
	<a title="Kevin Trapp" class="spielprofil_tooltip" id="45672" href="/kevin-trapp/profil/spieler/45672">Kevin Trapp</a>											</td>
										</tr>
										<tr>
											<td>Goalkeeper</td>
										</tr>
									</table>
								</td>
								<td class="zentriert">28</td>
										<td class="rechts">€8.00m</td>
									<td class="zentriert"><img src="https://tmssl.akamaized.net//images/flagge/verysmall/40.png?lm=1520612525" title="Germany" alt="Germany" class="flaggenrahmen" /></td>
								<td>
									<table class="inline-table">
										<tr>
											<td rowspan="2">
												<a class="vereinprofil_tooltip" id="24" href="/eintracht-frankfurt/transfers/verein/24/saison_id/2018"><img src="https://tmssl.akamaized.net//images/wappen/verysmall/24.png?lm=1403806187" title="&nbsp;" alt="Eintracht Frankfurt" class="" /></a>											</td>
											<td class="hauptlink">
	<a class="vereinprofil_tooltip" id="24" href="/eintracht-frankfurt/transfers/verein/24/saison_id/2018">E. Frankfurt</a>											</td>
										</tr>
										<tr>
											<td> <img src="https://tmssl.akamaized.net//images/flagge/tiny/40.png?lm=1520612525" title="Germany" alt="Germany" class="flaggenrahmen" /><a title="Bundesliga" href="/1-bundesliga/transfers/wettbewerb/L1">Bundesliga</a></td>
										</tr>
									</table>
								</td>
								<td class="rechts hauptlink "><a href="/jumplist/transfers/spieler/45672/transfer_id/2246340">Loan</a></td>
							</tr>
													<tr>
								<td class="bg_Torwart ma_pos" title="Torwart"></td>
								<td>
									<table class="inline-table">
										<tr>
											<td rowspan="2">
												<img src="https://tmssl.akamaized.net//images/portrait/small/282028-1493193759.jpg?lm=1493193783" title="Rémy Descamps" alt="Rémy Descamps" class="bilderrahmen-fixed" />											</td>
											<td class="hauptlink">
	<a title="Rémy Descamps" class="spielprofil_tooltip" id="282028" href="/remy-descamps/profil/spieler/282028">Rémy Descamps</a>											</td>
										</tr>
										<tr>
											<td>Goalkeeper</td>
										</tr>
									</table>
								</td>
								<td class="zentriert">22</td>
										<td class="rechts">€600k</td>
									<td class="zentriert"><img src="https://tmssl.akamaized.net//images/flagge/verysmall/50.png?lm=1520611569" title="France" alt="France" class="flaggenrahmen" /></td>
								<td>
									<table class="inline-table">
										<tr>
											<td rowspan="2">
												<a class="vereinprofil_tooltip" id="3524" href="/clermont-foot-auvergne-63/transfers/verein/3524/saison_id/2018"><img src="https://tmssl.akamaized.net//images/wappen/verysmall/3524.png?lm=1403627560" title="&nbsp;" alt="Clermont Foot Auvergne 63" class="" /></a>											</td>
											<td class="hauptlink">
	<a class="vereinprofil_tooltip" id="3524" href="/clermont-foot-auvergne-63/transfers/verein/3524/saison_id/2018">Clermont Foot</a>											</td>
										</tr>
										<tr>
											<td> <img src="https://tmssl.akamaized.net//images/flagge/tiny/50.png?lm=1520611569" title="France" alt="France" class="flaggenrahmen" /><a title="Ligue 2" href="/ligue-2/transfers/wettbewerb/FR2">Ligue 2</a></td>
										</tr>
									</table>
								</td>
								<td class="rechts hauptlink "><a href="/jumplist/transfers/spieler/282028/transfer_id/2233827">Loan</a></td>
							</tr>
													<tr>
								<td class="bg_Mittelfeld ma_pos" title="Mittelfeld"></td>
								<td>
									<table class="inline-table">
										<tr>
											<td rowspan="2">
												<img src="https://tmssl.akamaized.net//images/portrait/small/18900-1455120470.jpg?lm=1455120434" title="Hatem Ben Arfa" alt="Hatem Ben Arfa" class="bilderrahmen-fixed" />											</td>
											<td class="hauptlink">
	<a title="Hatem Ben Arfa" class="spielprofil_tooltip" id="18900" href="/hatem-ben-arfa/profil/spieler/18900">Hatem Ben Arfa</a>											</td>
										</tr>
										<tr>
											<td>Attacking Midfield</td>
										</tr>
									</table>
								</td>
								<td class="zentriert">31</td>
										<td class="rechts">€5.00m</td>
									<td class="zentriert"><img src="https://tmssl.akamaized.net//images/flagge/verysmall/50.png?lm=1520611569" title="France" alt="France" class="flaggenrahmen" /><br /><img src="https://tmssl.akamaized.net//images/flagge/verysmall/173.png?lm=1520611569" title="Tunisia" alt="Tunisia" class="flaggenrahmen" /></td>
								<td>
									<table class="inline-table">
										<tr>
											<td rowspan="2">
												<a title="Without ClubWithout Club" class="" id="515" href="/vereinslos/transfers/verein/515/saison_id/2018"><img src="https://tmssl.akamaized.net//images/wappen/verysmall/515.png?lm=1456997255" title="Without Club" alt="Without Club" class="" /></a>											</td>
											<td class="hauptlink">
	<a title="Without Club" class="" id="515" href="/vereinslos/transfers/verein/515/saison_id/2018">Without Club</a>											</td>
										</tr>
										<tr>
											<td> </td>
										</tr>
									</table>
								</td>
								<td class="rechts hauptlink "><a href="/jumplist/transfers/spieler/18900/transfer_id/2079105">-</a></td>
							</tr>
													<tr>
								<td class="bg_Mittelfeld ma_pos" title="Mittelfeld"></td>
								<td>
									<table class="inline-table">
										<tr>
											<td rowspan="2">
												<img src="https://tmssl.akamaized.net//images/portrait/small/7602-1455621338.jpg?lm=1455621355" title="Thiago Motta" alt="Thiago Motta" class="bilderrahmen-fixed" />											</td>
											<td class="hauptlink">
	<a title="Thiago Motta" class="spielprofil_tooltip" id="7602" href="/thiago-motta/profil/spieler/7602">Thiago Motta</a>											</td>
										</tr>
										<tr>
											<td>Defensive Midfield</td>
										</tr>
									</table>
								</td>
								<td class="zentriert">35</td>
										<td class="rechts">€1.00m</td>
									<td class="zentriert"><img src="https://tmssl.akamaized.net//images/flagge/verysmall/75.png?lm=1520611569" title="Italy" alt="Italy" class="flaggenrahmen" /><br /><img src="https://tmssl.akamaized.net//images/flagge/verysmall/26.png?lm=1520611569" title="Brazil" alt="Brazil" class="flaggenrahmen" /></td>
								<td>
									<table class="inline-table">
										<tr>
											<td rowspan="2">
												<a title="RetiredRetired" class="" id="123" href="/karriereende/transfers/verein/123/saison_id/2018"><img src="https://tmssl.akamaized.net//images/wappen/verysmall/123.png?lm=1456997286" title="Retired" alt="Retired" class="" /></a>											</td>
											<td class="hauptlink">
	<a title="Retired" class="" id="123" href="/karriereende/transfers/verein/123/saison_id/2018">Retired</a>											</td>
										</tr>
										<tr>
											<td> </td>
										</tr>
									</table>
								</td>
								<td class="rechts hauptlink "><a href="/jumplist/transfers/spieler/7602/transfer_id/2101881">-</a></td>
							</tr>
																			<tr>
								<td class="bg_Sturm ma_pos" title="Sturm"></td>
								<td>
									<table class="inline-table">
										<tr>
											<td rowspan="2">
												<img src="https://tmssl.akamaized.net//images/portrait/small/342229-1533629004.jpg?lm=1533629019" title="Kylian Mbappé" alt="Kylian Mbappé" class="bilderrahmen" />											</td>
											<td class="hauptlink">
	<a title="Kylian Mbappé" class="spielprofil_tooltip" id="342229" href="/kylian-mbappe/profil/spieler/342229">Kylian Mbappé</a>											</td>
										</tr>
										<tr>
											<td>Centre-Forward</td>
										</tr>
									</table>
								</td>
								<td class="zentriert">19</td>
										<td class="rechts">€120.00m</td>
									<td class="zentriert"><img src="https://tmssl.akamaized.net//images/flagge/verysmall/50.png?lm=1520611569" title="France" alt="France" class="flaggenrahmen" /><br /><img src="https://tmssl.akamaized.net//images/flagge/verysmall/31.png?lm=1520611569" title="Cameroon" alt="Cameroon" class="flaggenrahmen" /></td>
								<td>
									<table class="inline-table">
										<tr>
											<td rowspan="2">
	<a class="vereinprofil_tooltip" id="162" href="/as-monaco/transfers/verein/162/saison_id/2017"><img src="https://tmssl.akamaized.net//images/wappen/verysmall/162.png?lm=1463176069" title="&nbsp;" alt="AS Monaco" class="" /></a>											</td>
											<td class="hauptlink">
	<a class="vereinprofil_tooltip" id="162" href="/as-monaco/transfers/verein/162/saison_id/2017">Monaco</a>											</td>
										</tr>
										<tr>
											<td> <img src="https://tmssl.akamaized.net//images/flagge/tiny/50.png?lm=1520611569" title="France" alt="France" class="flaggenrahmen" /><a title="Ligue 1" href="/ligue-1/transfers/wettbewerb/FR1">Ligue 1</a></td>
										</tr>
									</table>
								</td>
								<td class="rechts hauptlink "><a href="/jumplist/transfers/spieler/342229/transfer_id/1900075">End of loan<br /><i class="normaler-text">Jun 30, 2018</i></a></td>
							</tr>
					</tbody>
						<tfoot>
							<tr>
								<td colspan="7" class="rechts">Sum: 107,00 mil. €</td>
							</tr>
							<tr>
								<td colspan="7" class="rechts">Average age of departures: 25,2</td>
							</tr>
							<tr>
								<td colspan="7" class="rechts">Total market value departures: 258,30 mil. €</td>
							</tr>
						</tfoot>
					</table>
			</div>
		</div>
	</div>
		</div>	


</div>
  
</body>
</html>
`;
