import HandleBars from 'handlebars';


HandleBars.registerHelper('ifAnyEquals', function (arg1, arg2, arg3, arg4, options) {
	return (arg1 === arg4 || arg2 === arg4 || arg3 === arg4) ? options.fn(this) : options.inverse(this);
}
);
HandleBars.registerHelper('ifEquals', function (arg1, arg2, options) {
	return (arg1 === arg2) ? options.fn(this) : options.inverse(this);
}
);

HandleBars.registerHelper('ifAny4Equals', function (arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, options) {
	return (arg1 === arg2 || arg3 === arg4 || arg5 === arg6 || arg7 === arg8) ? options.fn(this) : options.inverse(this);
}
);

HandleBars.registerHelper('ifAnyEqualsNot', function (arg1, arg2, arg3, arg4, options) {
	return (arg1 !== arg4 || arg2 !== arg4 || arg3 !== arg4) ? options.fn(this) : options.inverse(this);
}
);

HandleBars.registerHelper('ifAny5EqualsNot', function (arg1, arg2, arg3, arg4, arg5, arg6, options) {
	return (arg1 !== arg6 || arg2 !== arg6 || arg3 !== arg6 || arg4 !== arg6 || arg5 !== arg6) ? options.fn(this) : options.inverse(this);
}
);

HandleBars.registerHelper('ifAnyOfEitherEquals', function (arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, options) {
	return ((arg1 === arg4 || arg2 === arg4 || arg3 === arg4) || (arg5 === arg8 || arg6 === arg8 || arg7 === arg8)) ? options.fn(this) : options.inverse(this);
}
);

HandleBars.registerHelper('ifAnyOfEitherEqualsNot', function (arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, options) {
	return ((arg1 !== arg4 || arg2 !== arg4 || arg3 !== arg4) || (arg5 !== arg8 || arg6 !== arg8 || arg7 !== arg8)) ? options.fn(this) : options.inverse(this);
}
);

HandleBars.registerHelper('ifEqualsOr', function (arg1, arg2, arg3, options) {
	return (arg1 === arg2 || arg1 === arg3) ? options.fn(this) : options.inverse(this);
}
);

HandleBars.registerHelper('ifEitherEquals', function (arg1, arg2, arg3, options) {
	return (arg1 === arg3 || arg2 === arg3) ? options.fn(this) : options.inverse(this);
}
);

HandleBars.registerHelper('ifBothEquals', function (arg1, arg2, arg3, arg4, options) {
	return (arg1 === arg2 && arg3 === arg4) ? options.fn(this) : options.inverse(this);
}
);

HandleBars.registerHelper('ifBothEqualsNot', function (arg1, arg2, arg3, arg4, options) {
	return (arg1 !== arg2 || arg3 !== arg4) ? options.fn(this) : options.inverse(this);
}
);

HandleBars.registerHelper('ifThreeEqualsNot', function (arg1, arg2, arg3, arg4, options) {
	return (arg1 !== arg4 && arg2 !== arg4 && arg3 !== arg4) ? options.fn(this) : options.inverse(this);
}
);

HandleBars.registerHelper('ifEqualsAndOrAnd', function (arg1, arg2, arg3, arg4, arg5, options) {
	return (arg1 === arg2) && (arg3 === arg4 || arg3 === arg5) ? options.fn(this) : options.inverse(this);
}
);

HandleBars.registerHelper('ifEqualsAndOr', function (arg1, arg2, arg3, arg4, arg5, arg6, options) {
	return (arg1 === arg2 && arg3 === arg4) || (arg5 === arg6) ? options.fn(this) : options.inverse(this);
}
);

HandleBars.registerHelper('ifEqualsNotOrAnd', function (arg1, arg2, arg3, arg4, arg5, arg6, options) {
	return (arg1 !== arg2 && arg1 !== "") || (arg3 === arg4 && arg5 === arg6) ? options.fn(this) : options.inverse(this);
}
);

HandleBars.registerHelper('ifEqualsOrAndOrOrAndOr', function (arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, options) {
	return (arg1 === arg2 || arg1 === arg3) || ((arg1 === arg4 || arg1 === arg5) && (arg6 === arg7 || arg6 === arg8)) ? options.fn(this) : options.inverse(this);
}
);

HandleBars.registerHelper('ifEqualsNotAnd', function (arg1, arg2, arg3, arg4, options) {
	return ((arg1 !== arg2 && arg1 !== "") && arg3 === arg4) ? options.inverse(this) : options.fn(this);
}
);

HandleBars.registerHelper('ifEqualsNotAndNot', function (arg1, arg2, arg3, arg4, arg5, options) {
	return (arg1 === arg2 && (arg3 === arg4 || arg3 === arg5)) ? options.inverse(this) : options.fn(this);
}
);

HandleBars.registerHelper('ifEqualsAndNot', function (arg1, arg2, arg3, arg4, options) {
	return (arg1 === arg2 && arg3 !== arg4) ? options.fn(this) : options.inverse(this);
}
);

HandleBars.registerHelper('ifEqualsNot', function (arg1, arg2, options) {
	return (arg1 !== arg2 && arg1 !== "") ? options.fn(this) : options.inverse(this);
}
);

HandleBars.registerHelper('ifNotNot', function (arg1, arg2, arg3, arg4, options) {
	return (arg1 !== arg2 || arg3 !== arg4) ? options.fn(this) : options.inverse(this);
}
);

HandleBars.registerHelper('checkAllFanControls', function (arg1, arg2, arg3, arg4, arg5, options) {
	return (arg1 !== arg4) || (arg1 !== arg5) ||
		(arg2 !== arg4) || (arg2 !== arg5) ||
		(arg3 !== arg4) || (arg3 !== arg5) ? options.fn(this) : options.inverse(this);
}
);

HandleBars.registerHelper('ifEitherFanControlEquals', function (arg1, arg2, arg3, options) {
	return (arg1 === arg3) || (arg2 === arg3) ? options.fn(this) : options.inverse(this);
}
);


HandleBars.registerHelper('ifNotOrNot', function (arg1, arg2, arg3, arg4, options) {
	return (arg1 !== arg2) || (arg3 !== arg4) ? options.fn(this) : options.inverse(this);
}
);

HandleBars.registerHelper('ifNotOrNotOrEqual', function (arg1, arg2, arg3, arg4, arg5, arg6, options) {
	return (arg1 !== arg2) || (arg3 !== arg4) || (arg5 === arg6) ? options.fn(this) : options.inverse(this);
}
);

HandleBars.registerHelper('ifEqualsNotNot', function (arg1, arg2, arg3, options) {
	return (arg1 !== arg2) && (arg1 !== arg3) && (arg1 !== "") ? options.fn(this) : options.inverse(this);
}
);

HandleBars.registerHelper('ifEqualsOrOr', function (arg1, arg2, arg3, arg4, options) {
	return (arg1 === arg2 || arg3 === arg4) ? options.fn(this) : options.inverse(this);
}
);

HandleBars.registerHelper('ifEqualsNotOr', function (arg1, arg2, arg3, arg4, options) {
	return ((arg1 !== arg2 && arg1 !== "") || arg3 === arg4) ? options.fn(this) : options.inverse(this);
}
);

HandleBars.registerHelper('ifEqualsNotEither', function (arg1, arg2, arg3, options) {
	return (arg1 !== arg2 && arg1 !== arg3) ? options.fn(this) : options.inverse(this);
}
);

HandleBars.registerHelper('ifEqualsNotOrOr', function (arg1, arg2, arg3, arg4, arg5, arg6, options) {
	return (arg1 !== arg2 || arg3 === arg4 || arg5 === arg6) ? options.fn(this) : options.inverse(this);
}
);

HandleBars.registerHelper('ifEqualsNotOrNot', function (arg1, arg2, arg3, arg4, arg5, arg6, options) {
	return (arg1 !== arg2 || arg3 !== arg4) && (arg5 !== arg6) ? options.fn(this) : options.inverse(this);
}
);

HandleBars.registerHelper('ifSpecialCooling', function (arg1, arg2, arg3, arg4, arg5, arg6, arg7, options) {
	return ((arg1 === arg2 || arg1 === arg3) && (arg4 !== arg5)) || (arg1 !== arg2 && arg6 !== arg7) ? options.fn(this) : options.inverse(this);
}
);

HandleBars.registerHelper('ifSpecialCooling2', function (arg1, arg2, arg3, arg4, options) {
	return ((arg1 === arg2) && (arg3 !== arg4)) || (arg1 !== arg2) ? options.fn(this) : options.inverse(this);
}
);

HandleBars.registerHelper('lowercase', function (str) {
	if (str) {
		return str.toLowerCase();
	} else {
		return null;
	}
}
);

HandleBars.registerHelper('checkSetPoint', function (str) {
	if (str === "") {
		return "##"
	} else {
		return str
	}
}
);

HandleBars.registerHelper('checkModelFileValues', function (str) {
	if (str === "") {
		return null
	} else {
		return str
	}
}
);

HandleBars.registerHelper('checkSetPointModelFileValues', function (str) {
	if (str === "") {
		return null
	} else {
		return str
	}
}
);

// HandleBars.registerHelper('firstuppercase', function (str) {
// 	var newStr;
// 	for (var i = 0; i < str.length; i++) {
// 		newStr = newStr + str.charAt(i);

// 	}
// 	return newStr;
// }
// );

HandleBars.registerHelper('uppercase', function (str) {
	if (str) {
		return str.toUpperCase();
	} else {
		return null;
	}
}
);

HandleBars.registerHelper('shorten', function (str) {
	if (str) {
		return str.substring(0, str.length - 28);
	} else {
		return null;
	}

}
);

HandleBars.registerHelper('split', function (str) {
	if (str) {
		return str.split(" ", 1);
	} else {
		return null;
	}

}
);

HandleBars.registerHelper('italic', function (str) {
	if (str) {
		return str.italic;
	} else {
		return null;
	}

}
);








