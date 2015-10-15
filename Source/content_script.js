walk(document.body);

function walk(node) 
{
	// I stole this function from here:
	// http://is.gd/mwZp7E
	
	var child, next;

	switch ( node.nodeType )  
	{
		case 1:  // Element
		case 9:  // Document
		case 11: // Document fragment
			child = node.firstChild;
			while ( child ) 
			{
				next = child.nextSibling;
				walk(child);
				child = next;
			}
			break;

		case 3: // Text node
			handleText(node);
			break;
	}
}

function handleText(textNode) 
{
	var v = textNode.nodeValue;

	v = v.replace(/\barmory\b/g, "armoury");
	v = v.replace(/\bbehavior\b/g, "behaviour");
	v = v.replace(/\bcandor\b/g, "candour");
	v = v.replace(/\bclamor\b/g, "clamour");
	v = v.replace(/\bcolor\b/g, "colour");
	v = v.replace(/\bdemeanor\b/g, "demeanour");
	v = v.replace(/\bendeavor\b/g, "endeavour");
	v = v.replace(/\bfavorite\b/g, "favourite");
	v = v.replace(/\bflavor\b/g, "flavour");
	v = v.replace(/\bglamor\b/g, "glamour");
	v = v.replace(/\bharbor\b/g, "harbour");
	v = v.replace(/\bhonor\b/g, "honour");
	v = v.replace(/\bhumor\b/g, "humour");
	v = v.replace(/\blabor\b/g, "labour");
	v = v.replace(/\bneighbor\b/g, "neighbour");
	v = v.replace(/\bodor\b/g, "odour");
	v = v.replace(/\brancor\b/g, "rancour");
	v = v.replace(/\brigor\b/g, "rigour");
	v = v.replace(/\brumor\b/g, "rumour");
	v = v.replace(/\bsavior\b/g, "saviour");
	v = v.replace(/\bsavor\b/g, "savour");
	v = v.replace(/\bsavory\b/g, "savoury");
	v = v.replace(/\bsplendor\b/g, "splendour");
	v = v.replace(/\bvalor\b/g, "valour");
	v = v.replace(/\bvapor\b/g, "vapour");
	v = v.replace(/\bvigor\b/g, "vigour");
	v = v.replace(/\bamphitheater\b/g, "amphitheatre");
	v = v.replace(/\bcaliber\b/g, "calibre");
	v = v.replace(/\bcentimeter\b/g, "centimetre");
	v = v.replace(/\bcenter\b/g, "centre");
	v = v.replace(/\bfiber\b/g, "fibre");
	v = v.replace(/\bkilometer\b/g, "kilometre");
	v = v.replace(/\bliter\b/g, "litre");
	v = v.replace(/\blouver\b/g, "louvre");
	v = v.replace(/\bluster\b/g, "lustre");
	v = v.replace(/\bmaneuver\b/g, "manoeuvre");
	v = v.replace(/\bmeager\b/g, "meagre");
	v = v.replace(/\bmeter\b/g, "metre");
	v = v.replace(/\bmillimeter\b/g, "millimetre");
	v = v.replace(/\bsaber\b/g, "sabre");
	v = v.replace(/\bscepter\b/g, "sceptre");
	v = v.replace(/\bsomber\b/g, "sombre");
	v = v.replace(/\bspecter\b/g, "spectre");
	v = v.replace(/\btheater\b/g, "theatre");
	v = v.replace(/\banalog\b/g, "analogue");
	v = v.replace(/\bdialog\b/g, "dialogue");
	v = v.replace(/\bcatalog\b/g, "catalogue");
	v = v.replace(/\bepilog\b/g, "epilogue");
	v = v.replace(/\bmonolog\b/g, "monologue");
	v = v.replace(/\bprolog\b/g, "prologue");
	v = v.replace(/\btravelog\b/g, "travelogue");
	v = v.replace(/\bcanceled\b/g, "cancelled");
	v = v.replace(/\bcounselor\b/g, "counsellor");
	v = v.replace(/\bequaled\b/g, "equalled");
	v = v.replace(/\bfueling\b/g, "fuelling");
	v = v.replace(/\bfueled\b/g, "fuelled");
	v = v.replace(/\bgroveling\b/g, "grovelling");
	v = v.replace(/\bjeweler\b/g, "jeweller");
	v = v.replace(/\bjewelery\b/g, "jewellery");
	v = v.replace(/\bleveled\b/g, "levelled");
	v = v.replace(/\blibeled\b/g, "libelled");
	v = v.replace(/\bmarvelous\b/g, "marvellous");
	v = v.replace(/\bmodeling\b/g, "modelling");
	v = v.replace(/\bpaneled\b/g, "panelled");
	v = v.replace(/\bquarreling\b/g, "quarrelling");
	v = v.replace(/\breveled\b/g, "revelled");
	v = v.replace(/\bwoolen\b/g, "woollen");
	v = v.replace(/\bappall\b/g, "appal");
	v = v.replace(/\bdistill\b/g, "distil");
	v = v.replace(/\benroll\b/g, "enrol");
	v = v.replace(/\benthrall\b/g, "enthral");
	v = v.replace(/\bfulfill\b/g, "fulfil");
	v = v.replace(/\binstill\b/g, "instil");
	v = v.replace(/\bskillful\b/g, "skilful");
	v = v.replace(/\bwillful\b/g, "wilful");
	v = v.replace(/\bdiarrhea\b/g, "diarrhoea");
	v = v.replace(/\bestrogen\b/g, "oestrogen");
	v = v.replace(/\bfetus\b/g, "foetus");
	v = v.replace(/\bmaneuver\b/g, "manoeuvre");
	v = v.replace(/\bmementos\b/g, "mementoes");
	v = v.replace(/\banemia\b/g, "anaemia");
	v = v.replace(/\bcesarean\b/g, "caesarean");
	v = v.replace(/\bgynecology\b/g, "gynaecology");
	v = v.replace(/\bhemorrhage\b/g, "haemorrhage");
	v = v.replace(/\bleukemia\b/g, "leukaemia");
	v = v.replace(/\bpaleontology\b/g, "palaeontology");
	v = v.replace(/\bpediatric\b/g, "paediatric");
	v = v.replace(/\bappetizer\b/g, "appetiser");
	v = v.replace(/\bauthorize\b/g, "authorise");
	v = v.replace(/\bcapitalize\b/g, "capitalise");
	v = v.replace(/\bcharacterize\b/g, "characterise");
	v = v.replace(/\bcivilize\b/g, "civilise");
	v = v.replace(/\bcolonize\b/g, "colonise");
	v = v.replace(/\bcriticize\b/g, "criticise");
	v = v.replace(/\bdramatize\b/g, "dramatise");
	v = v.replace(/\bemphasize\b/g, "emphasise");
	v = v.replace(/\bequalize\b/g, "equalise");
	v = v.replace(/\bmobilize\b/g, "mobilise");
	v = v.replace(/\bnaturalize\b/g, "naturalise");
	v = v.replace(/\borganize\b/g, "organise");
	v = v.replace(/\bpopularize\b/g, "popularise");
	v = v.replace(/\brealize\b/g, "realise");
	v = v.replace(/\brecognize\b/g, "recognise");
	v = v.replace(/\bsatirize\b/g, "satirise");
	v = v.replace(/\bstandardize\b/g, "standardise");
	v = v.replace(/\bsymbolize\b/g, "symbolise");
	v = v.replace(/\bvaporize\b/g, "vaporise");
	textNode.nodeValue = v;
}


