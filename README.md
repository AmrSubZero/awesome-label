# Awesome Label

---

### Overview

> - Awesome Label is a jQuery library creates animated form labels like google material design, instead of using the placeholder attribute.

> - Awesome label created and based on **jQuery**

> - Awesome label working on all textboxes/textareas.

---

### Browser Support

> * Webkit Browsers (Chrome/Safari/etc)

> * Mozilla Firefox

> * Opera Browser

> * Internet Explorer

---

### Installation

> 1- Browse the **/libs** directory

> 2- Copy ***awesomelabel.min.js*** to your project directory.

> 3- Include the latest ***jquery.min.js*** to your project file.

> 4- Include the ***awesomelabel.min.js*** to your project file under the jquery.

---

### Getting Started

> 1- Create a textbox, for e.g text input.

> 2- Give it a class, for e.g : ***awesomelabel***

> 3- Add ***data-label*** attribute, it's the label text, for e.g : ***Enter username..***

    <input type="text" class="awesomelabel" data-label="Enter your username.." />

> 4- Now you need to run the plugin to this text input :

    $(document).ready(function(){
		$('.awesomelabel').awesomelabel();
	});

> 5- Then you're good to go

---

### Adding Arguments

- You can specify some arguments to the text input for e.g
-  ***( Margin - Padding - Width - Height - Float - Ease )***

***Note :*** the ease argument is the transition interval, you can set it by seconds or milliseconds.

    $('.awesomelabel').awesomelabel({
	    margin: '20px',
   		padding: '20px',
   		width: '250px',
   		height: '30px',
   		float: 'left',
   		ease: '0.2' // This means 2 milliseconds
    });

---

### Adding some normal CSS :

    .awesomelabel {
		outline:none;
		background:transparent;
		border:none;
		border-bottom:2px solid cornflowerblue;
		color:gray;
	}

	.awesomelabel:focus {
		border-color:lightgray;
	}

	.awesomelabel:focus ~ label {
		color:cornflowerblue;
	}

	.awesomelabel-input-group label {
		font-family:georgia;
		font-size:14px;
		font-style:italic;
		color:#bbb;
	}

> ***Note :*** by default the plugin is wrapping the textbox with div and the class of this div is going to be started with your specified class of the textbox and next to it ***-input-group*** for e.g if you gave the textbox a class called ***awesomelabel*** the wrapper div class of it will be ***awesomelabel-input-group***.

> And if you want to treat with the input for e.g you want to **float/margin/etc** it or you want to change the label **font/color/etc** you will need to treat with the wrapping div ***inputClass-input-group***, you can make things alot easier if you can play around with browser inspect element.