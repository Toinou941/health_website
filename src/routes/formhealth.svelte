<div class="header">
    <div class="logocontainer">
        <h1 class>Healthspace</h1>
    </div>

    <br>
    <form class="bg-indigo-200" style="font-family: Arial">
            <label for="wellbeing">How do you feel today ?</label>
            <br>
            <span>Terrible</span>
            <input type="range" name="wellbeing" id="wellbeing" value="3" min="1" max="10">
            <span>Excellent</span>
        <br>
        <br>
        <fieldset id="group1">        
            <p>How would you assess your mobility ? </p>
            <input type="radio" name="group1" value="1">
            <label for="one">1 </label>
            <input type="radio" name="group1" value="2">
            <label for="two">2 </label>
            <input type="radio" name="group1" value="3">
            <label for="three">3 </label>
            <input type="radio" name="group1" value="4">
            <label for="four">4 </label>
            <input type="radio" name="group1" value="5">
            <label for="five">5 </label>
        </fieldset>
        <br>
        <br>
        <fieldset id="group2">        
            <p>Do you often experience pain or discomfort ? </p>
            <input type="radio" name="group2" value="1">
            <label for="one">1 </label>
            <input type="radio" name="group2" value="2">
            <label for="two">2 </label>
            <input type="radio" name="group2" value="3">
            <label for="three">3 </label>
            <input type="radio" name="group2" value="4">
            <label for="four">4 </label>
            <input type="radio" name="group2" value="5">
            <label for="five">5 </label>
        </fieldset>
        <br>
        <br>
        <fieldset id="group3">            
            <p>If yes, where would you localize it ?  </p>
            <input type="radio" name="group3" value="back ">
            <label for="back "> Back  </label>
            <input type="radio" name="group3" value="joint">
            <label for="joint"> Joint </label>
            <input type="radio" name="group3" value="belly">
            <label for="belly"> Belly </label>
            <input type="radio" name="group3" value="chest">
            <label for="chest"> Chest </label>
            <input type="radio" name="group3" value="headaches">
            <label for="headaches"> Headaches </label>
        </fieldset>

        <br>
        <br>
        <fieldset id="group4">        
            <p>Do you feel axious or depressed ?  </p>
            <input type="radio" name="group4" value="1">
            <label for="one">1 </label>
            <input type="radio" name="group4" value="2">
            <label for="two">2 </label>
            <input type="radio" name="group4" value="3">
            <label for="three">3 </label>
            <input type="radio" name="group4" value="4">
            <label for="four">4 </label>
            <input type="radio" name="group4" value="5">
            <label for="five">5 </label>
        </fieldset>
        <br>
        <br>    
        <fieldset id="group5">        
            <p>Do you feel eye strain ?  </p>
            <input type="radio" name="group5" value="1">
            <label for="one">1 </label>
            <input type="radio" name="group5" value="2">
            <label for="two">2 </label>
            <input type="radio" name="group5" value="3">
            <label for="three">3 </label>
            <input type="radio" name="group5" value="4">
            <label for="four">4 </label>
            <input type="radio" name="group5" value="5">
            <label for="five">5 </label>
        </fieldset>
        <br>
        <br>
        <section class="text-center text-blue-500 hover:text-indigo-800 font-serif font-bold border-radius">
            <input type="submit" value="Submit">
          </section>
      </form>
</div>
.buttons {
    margin-top: 0.8rem;
    display: flex;
    align-items: center;
  }
	
  button {
    border-radius: 5px;
    padding: 0.5rem 1rem;
    margin-right: 1rem;
    color: white;
  }

  button[type='reset'] {
    background-color: #f56565;
  }

  button[type='submit'] {
    background-color: #48bb78;
    width: 80px;
  }