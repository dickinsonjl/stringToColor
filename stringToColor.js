function colorCode(str, lightness, mode)
{
	var r = 128;
	var g = 64;
	var b = 32;
	var gs = 0;

	lightness = lightness % 256;

	var front;
	var back;

	var output;

	if(str)
	{
		for(var i = 0, maxi = str.length; i < maxi; i++)
		{
			front = str.charCodeAt(i);
			back = str.charCodeAt(str.length - 1 - i);
			r = r + (Math.pow(front % 16, 2) + back) * (i * 4) - Math.pow((back + i) % 16, 2);
			g = g + (Math.pow(front % 16, 2) + back) * (i * 3) - Math.pow((back + i) % 16, 2);
			b = b + (Math.pow(front % 16, 2) + back) * (i * 2) - Math.pow((back + i) % 16, 2);
		}
	}

	r = (r >= 0) ? r : -1*r;
	g = (g >= 0) ? g : -1*g;
	b = (b >= 0) ? b : -1*b;

	r = (r + g + 32) % (256 - lightness) + lightness;
	g = (g + b + 64) % (256 - lightness) + lightness;
	b = (b + r + 128) % (256 - lightness) + lightness;
	gs = (r + g + b) / 3;

	r = r.toString(16);
	g = g.toString(16);
	b = b.toString(16);
	gs = gs.toString(16);

	if(r.length === 1) r = '0'+r;
	if(g.length === 1) g = '0'+g;
	if(b.length === 1) b = '0'+b;
	if(gs.length === 1) gs = '0'+gs;


	if(mode === 'greyscale')
	{
		output = ''+gs+gs+gs;
	} else {
		output = ''+r+g+b;
	}

	return output;
}
