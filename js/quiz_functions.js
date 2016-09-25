var useranswers = new Array();
var answered = 0;

function renderQuiz()
{
	for(i=0;i<questions.length;i++)
	{
		document.writeln('<p class="question">' + questions[i] + ' <span id="result_' + i + '"><img src="blank.png" style="border:0" alt="" /></span></p>');
		for(j=0;j<choices[i].length;j++)
		{
			document.writeln('<input type="radio" name="answer_' + i + '" value="' + choices[i][j] + '" id="answer_' + i + '_' + j + '" class="question_' + i + '" onclick="submitAnswer(' + i + ', this, \'question_' + i + '\', \'label_' + i + '_' + j + '\')" /><label id="label_' + i + '_' + j + '" for="answer_' + i + '_' + j + '"> ' + choices[i][j] + '</label><br />');
		}
	}
	document.writeln('&nbsp;<p style="display:none"><img src="correct.gif" style="border:0" alt="Correct!" />< img src="incorrect.gif" style="border:0" alt="Incorrect!" /></p>');
}

function submitAnswer(questionId, obj, classId, labelId)
{
	useranswers[questionId] = obj.value;
	document.getElementById(labelId).style.fontWeight = "bold";
	disableQuestion(classId);
	showResult(questionId);
	answered++;
}
function showResult(questionId)
{
	if(answers[questionId] == useranswers[questionId])
	{
		document.getElementById('result_' + questionId).innerHTML = '<img src="correct.gif" style="border:0" alt="Correct!" />';
	}
	else
	{
		document.getElementById('result_' + questionId).innerHTML = '<img src="incorrect.gif" style="border:0" alt="Incorrect!" />';
	}
}

function disableQuestion(classId)
{
	var alltags=document.all? document.all : document.getElementsByTagName("*")
	for (i=0; i<alltags.length; i++)
	{
		if (alltags[i].className == classId)
		{
			alltags[i].disabled = true;
		}
	}
}
