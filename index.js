let wrapper = document.getElementsByClassName('wrapper')[0];
wrapper.innerHTML =`
<h1> Survey Form </h1>
<form id="form">
    <div class="form-control">
        <label for="name" id="label-name">
         Name
        </label>
        <input type="text" id="name" placeholder="Enter your name" required/>
    </div>
    <div class="form-control">
        <label for="email" id="label-email">
         Email
        </label>
        <input type="email" id="email" placeholder="Enter your email" required/>
    </div>
    <div class="form-control">
        <label for="age" id="label-age">
         Age(optional)
        </label>
        <input type="text" id="age" placeholder="Age"/>
    </div>
    <div class="form-control">
        <label for="role" id="label-role">
         Which option best describes your current role?
        </label>
        <select name="role" id="role" required />
          <option value="student">student</option>
          <option value="intern">intern</option>
          <option value="professional">professional</option>
          <option value="other">other</option>
        </select>
    </div>
    <div class="form-control">
        <label>
            Would you recommed this application to a friend?
        </label>
        <label for="recommed-1">
            <input type="radio" id="recommed-1" name="recommed">Definitely</input>
        </label>
        <label for="recommed-2">
            <input type="radio" id="recommed-2" name="recommed">Maybe</input>
        </label>
        <label for="recommed-3">
            <input type="radio" id="recommed-3" name="recommed">Not sure</input>
        </label>
    </div>
    <div class="form-control">
        <label for="role" id="label-role">
         Which is your favourite feature of the application?
        </label>
        <select name="role" id="role">
          <option value="simplicity">simplicity</option>
          <option value="speed">speed</option>
          <option value="search option">search option</option>
          <option value="push notification">push notification</option>
        </select>
    </div>
    <div class="form-control">
        <label>
            what would you like to see improve?
        </label>
        <label for="recommed-1">
            <input type="radio" id="recommed-1" name="recommed">project</input>
        </label>
        <label for="recommed-2">
            <input type="radio" id="recommed-2" name="recommed">Assessments</input>
        </label>
        <label for="recommed-3">
            <input type="radio" id="recommed-3" name="recommed">Mentorship</input>
        </label>
    </div>
    <div class="form-control">
        <label for="comment">
        Any comments or suggestions?
        </label>
        <textarea name="comment" id="comment" placeholder="Enter your commets here..."></textarea>
    </div>
    <button type="submit" valu="submit">Submit</button>
</form>`