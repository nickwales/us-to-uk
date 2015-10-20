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

	v = v.replace(/\brmory\b/g, "rmoury");
	v = v.replace(/\behavior\b/g, "ehaviour");
	v = v.replace(/\bandor\b/g, "andour");
	v = v.replace(/\blamor\b/g, "lamour");
	v = v.replace(/\bolor\b/g, "olour");
	v = v.replace(/\bemeanor\b/g, "emeanour");
	v = v.replace(/\bndeavor\b/g, "ndeavour");
	v = v.replace(/\bavorite\b/g, "avourite");
	v = v.replace(/\blavor\b/g, "lavour");
	v = v.replace(/\blamor\b/g, "lamour");
	v = v.replace(/\barbor\b/g, "arbour");
	v = v.replace(/\bonor\b/g, "onour");
	v = v.replace(/\bumor\b/g, "umour");
	v = v.replace(/\babor\b/g, "abour");
	v = v.replace(/\beighbor\b/g, "eighbour");
	v = v.replace(/\bdor\b/g, "dour");
	v = v.replace(/\bancor\b/g, "ancour");
	v = v.replace(/\bigor\b/g, "igour");
	v = v.replace(/\bumor\b/g, "umour");
	v = v.replace(/\bavior\b/g, "aviour");
	v = v.replace(/\bavor\b/g, "avour");
	v = v.replace(/\bavory\b/g, "avoury");
	v = v.replace(/\bplendor\b/g, "plendour");
	v = v.replace(/\balor\b/g, "alour");
	v = v.replace(/\bapor\b/g, "apour");
	v = v.replace(/\bigor\b/g, "igour");
	v = v.replace(/\bmphitheater\b/g, "mphitheatre");
	v = v.replace(/\baliber\b/g, "alibre");
	v = v.replace(/\bentimeter\b/g, "entimetre");
	v = v.replace(/\benter\b/g, "entre");
	v = v.replace(/\biber\b/g, "ibre");
	v = v.replace(/\bilometer\b/g, "ilometre");
	v = v.replace(/\bliter\b/g, "itre");
	v = v.replace(/\bouver\b/g, "ouvre");
	v = v.replace(/\buster\b/g, "ustre");
	v = v.replace(/\baneuver\b/g, "anoeuvre");
	v = v.replace(/\beager\b/g, "eagre");
	v = v.replace(/\beter\b/g, "etre");
	v = v.replace(/\billimeter\b/g, "illimetre");
	v = v.replace(/\baber\b/g, "abre");
	v = v.replace(/\bcepter\b/g, "ceptre");
	v = v.replace(/\bomber\b/g, "ombre");
	v = v.replace(/\bpecter\b/g, "pectre");
	v = v.replace(/\bheater\b/g, "heatre");
	v = v.replace(/\bnalog\b/g, "nalogue");
	v = v.replace(/\bialog\b/g, "ialogue");
	v = v.replace(/\batalog\b/g, "atalogue");
	v = v.replace(/\bpilog\b/g, "pilogue");
	v = v.replace(/\bonolog\b/g, "onologue");
	v = v.replace(/\brolog\b/g, "rologue");
	v = v.replace(/\bravelog\b/g, "ravelogue");
	v = v.replace(/\banceled\b/g, "ancelled");
	v = v.replace(/\bounselor\b/g, "ounsellor");
	v = v.replace(/\bqualed\b/g, "qualled");
	v = v.replace(/\bueling\b/g, "uelling");
	v = v.replace(/\bueled\b/g, "uelled");
	v = v.replace(/\broveling\b/g, "rovelling");
	v = v.replace(/\beweler\b/g, "eweller");
	v = v.replace(/\bewelery\b/g, "ewellery");
	v = v.replace(/\beveled\b/g, "evelled");
	v = v.replace(/\bibeled\b/g, "ibelled");
	v = v.replace(/\barvelous\b/g, "arvellous");
	v = v.replace(/\bodeling\b/g, "odelling");
	v = v.replace(/\baneled\b/g, "anelled");
	v = v.replace(/\buarreling\b/g, "uarrelling");
	v = v.replace(/\beveled\b/g, "evelled");
	v = v.replace(/\boolen\b/g, "oollen");
	v = v.replace(/\bppall\b/g, "ppal");
	v = v.replace(/\bistill\b/g, "istil");
	v = v.replace(/\bnroll\b/g, "nrol");
	v = v.replace(/\bnthrall\b/g, "nthral");
	v = v.replace(/\bulfill\b/g, "ulfil");
	v = v.replace(/\bnstill\b/g, "nstil");
	v = v.replace(/\bkillful\b/g, "kilful");
	v = v.replace(/\billful\b/g, "ilful");
	v = v.replace(/\biarrhea\b/g, "iarrhoea");
	v = v.replace(/\bstrogen\b/g, "estrogen");
	v = v.replace(/\betus\b/g, "oetus");
	v = v.replace(/\baneuver\b/g, "anoeuvre");
	v = v.replace(/\bementos\b/g, "ementoes");
	v = v.replace(/\bnemia\b/g, "naemia");
	v = v.replace(/\besarean\b/g, "aesarean");
	v = v.replace(/\bynecology\b/g, "ynaecology");
	v = v.replace(/\bemorrhage\b/g, "aemorrhage");
	v = v.replace(/\beukemia\b/g, "eukaemia");
	v = v.replace(/\baleontology\b/g, "alaeontology");
	v = v.replace(/\bediatric\b/g, "aediatric");
	v = v.replace(/\bppetizer\b/g, "ppetiser");
	v = v.replace(/\buthorize\b/g, "uthorise");
	v = v.replace(/\bapitalize\b/g, "apitalise");
	v = v.replace(/\bharacterize\b/g, "haracterise");
	v = v.replace(/\bivilize\b/g, "ivilise");
	v = v.replace(/\bolonize\b/g, "olonise");
	v = v.replace(/\briticize\b/g, "riticise");
	v = v.replace(/\bramatize\b/g, "ramatise");
	v = v.replace(/\bmphasize\b/g, "mphasise");
	v = v.replace(/\bqualize\b/g, "qualise");
	v = v.replace(/\bobilize\b/g, "obilise");
	v = v.replace(/\baturalize\b/g, "aturalise");
	v = v.replace(/\brganize\b/g, "rganise");
	v = v.replace(/\bopularize\b/g, "opularise");
	v = v.replace(/\bealize\b/g, "ealise");
	v = v.replace(/\becognize\b/g, "ecognise");
	v = v.replace(/\batirize\b/g, "atirise");
	v = v.replace(/\btandardize\b/g, "tandardise");
	v = v.replace(/\bymbolize\b/g, "ymbolise");
	v = v.replace(/\baporize\b/g, "aporise");
	textNode.nodeValue = v;
}


