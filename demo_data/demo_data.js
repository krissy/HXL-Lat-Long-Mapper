var demoData = "Status	Country	Primary Organisation	Type	Latitude	Longitude \r\n"+
"#status	#country	#org	#activity	#lat_deg	#lon_deg \r\n"+
"Functional	Liberia	Samaritans Purse	ETC	8.36164	-10.21038 \r\n"+
"Functional	Liberia	MSF	ETC	8.35454	-10.20037 \r\n"+
"Functional	Liberia	MSF	Triage	8.42277	-9.7532264 \r\n"+
"Functional	Liberia	Samaritans Purse	ETC	6.2393809	-10.6965137 \r\n"+
"Functional	Liberia	MOH	ETC	6.2393809	-10.6965137 \r\n"+
"Functional	Liberia	MSF	ETC	6.24415	-10.69957 \r\n"+
"Functional	Liberia	MOH	Triage	6.32445	-10.8073 \r\n"+
"Functional	Liberia	MOH	ETC	6.28723	-10.77325 \r\n"+
"Functional	Liberia	MOH	Triage	6.3697076	-10.7919744 \r\n"+
"Funtional	Liberia	MOH	ETC	6.3843716	-10.7871135 \r\n"+
"Pending	Liberia		ETC	6.30892	-10.80411 \r\n"+
"Pending	Liberia		ETC	6.25697	-10.70202 \r\n"+
"Pending	Liberia		ETC	6.26969	-10.7347 \r\n"+
"Pending	Liberia	No Partner Identified	ETC	6.3279815	-10.79777 \r\n"+
"Pending	Liberia	No Partner Identified	ETC	6.3279815	-10.79777 \r\n"+
"Pending	Liberia	No Partner Identified	ETC	6.3279815	-10.79777 \r\n"+
"Pending	Liberia	No Partner Identified	ETC	6.2734	-10.79777 \r\n"+
"Closed	Liberia	Saint John of God	Hospital	6.2734	-10.75509 \r\n"+
"Pending	Liberia	No Partner Identified	ETC	7.35261	-8.71733 \r\n"+
"Functional	Liberia	No Partner Identified	ETC	7.2203	-8.9813 \r\n"+
"Functional	Liberia	No Partner Identified	ETC	7.02794	-9.55329 \r\n"+
"Functional	Liberia	IMC	ETC	6.9622195	-9.7134459 \r\n"+
"Functional	Liberia	MOH	Triage	6.8665	-10.8257 \r\n"+
"Pending	Liberia	Save the Children	ETC	6.5267	-10.3412 \r\n"+
"Pending	Liberia	No Partner Identified	ETC	5.8161533	-8.0995537 \r\n"+
"Functional	Guinea	MSF	ETC	9.53564	-13.6832 \r\n"+
"Functional	Guinea	MSF	ETC	8.56152	-10.13236 \r\n"+
"Functional	Guinea	MOH	Transit Centre	8.53688	-9.46481 \r\n"+
"Closed	Guinea	MSF	ETC	10.9115	-13.0299 \r\n"+
"Pending	Guinea	N/A	Transit Centre	7.7621	-8.8143 \r\n"+
"Pending	Guinea	N/A	Transit Centre	7.5695786	-9.2597491 \r\n"+
"Functional	Guinea	MSF	Triage	10.74207	-11.10646 \r\n"+
"Functional	Guinea	MSF	Triage	9.19844	-10.10352 \r\n"+
"Pending	Guinea	No Partner Identified	Transit Centre	9.4312135	-13.0918656 \r\n"+
"Functional	Sierra Leone	MOH	ETC	7.87517	-11.18473 \r\n"+
"Functional	Sierra Leone	IFRC	ETC	7.9390302	-11.1422825 \r\n"+
"Functional	Sierra Leone	MSF	ETC	8.27685	-10.56647 \r\n"+
"Functional	Sierra Leone	MSF	Triage	8.4616449	-10.3363192 \r\n"+
"Functional	Sierra Leone	MSF	Triage	8.2808305	-10.372805 \r\n"+
"Functional	Sierra Leone	MSF	Trage	7.4941267	-11.1693745 \r\n"+
"Functional	Sierra Leone	King's Health Partners UK	Triage	8.48823	-13.2384 \r\n"+
"Pending	Sierra Leone	No Partner Identified	Triage	8.4790017	-13.2680158 \r\n"+
"Functional	Sierra Leone		Triage	8.387303	-13.1387201 \r\n"+
"Functional	Sierra Leone		Triage	8.3362545	-13.0071441 \r\n"+
"Functional	Sierra Leone	MSF	ETC	7.9620299	-11.7364775 \r\n"+
"Functional	Sierra Leone	MSF	Triage	7.86568	-11.70837 \r\n"+
"Pending	Sierra Leone	EMERGENCY	Holding Centre	8.3973667	-13.2635501 \r\n"+
"Pending	Sierra Leone	UKDFID	ETC	8.2693344	-13.0878517 \r\n"+
"Pending	Sierra Leone	IMC	ETC	8.6868342	-12.543584 \r\n"+
"Pending	Sierra Leone	Addax Bio Energy Sierra Leone	ETC	8.8882804	-12.0439135 \r\n"+
"Functional	Sierra Leone		Holding Centre	9.323289	-12.1955 \r\n"+
"Functional	Sierra Leone		Holding Centre	9.323289	-12.1955 \r\n"+
"Functional	Sierra Leone		Holding Centre	9.323289	-12.1955 \r\n"+
"Functional	Sierra Leone		Holding Centre	8.7651729	-12.7849451 \r\n"+
"Closed	Nigeria	MOH	Hospital	6.4485325	3.4108534 \r\n"+
"Functional	Nigeria	MOH	ETC	6.497892	3.382923 \r\n"+
"Functional	Nigeria	MOH	Triage	4.8178445	6.9119515 \r\n"+
"Pending	Nigeria	MOH	Triage	9.6187093	6.5475752 \r\n"+
"Pending	Nigeria	MOH	Triage	5.517	5.75 \r\n"+
"Pending	Nigeria	MOH	Triage	5.4941876	5.9953209 \r\n"+
"Pending	Nigeria	MOH	Triage	5.894053	5.67666 \r\n"+
"Pending	Nigeria	MOH	Triage	6.264399	6.147732 \r\n"+
"Pending	Nigeria	MOH	Triage	5.483333	6.183333 \r\n"+
"Pending	Nigeria	MOH	Triage	5.7439387	5.9904916 \r\n"+
"Pending	Nigeria	MOH	Triage	5.483333	6.1 \r\n"+
"Functional	Senegal	MOH	Hospital	14.69287	-17.46639 \r\n"+
"Pending	Senegal	MOH	ETC	14.69287	-17.46639 \r\n"+
"Functional	Togo		Triage	6.12586	1.22485 \r\n"+
"Pending	Mali		Triage	12.6500083	-8.0000014";
