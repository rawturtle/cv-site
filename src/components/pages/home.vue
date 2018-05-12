<template>
  <div class="tile is-ancestor">
    <div class="tile ">
      <div class="tile is-parent is-4">
        <div class="tile is-child contact">
        <div class="card">
          <header class="card-header">
            <p class="card-header-title">
              Contact
            </p>
          </header>
          <div class="card-image">
            <figure class="image">
              <img src="../../assets/images/myface.jpg" alt="My face">
            </figure>
            </div>
            <div class="card-content">
              <p class=""><i class="fas fa-user"></i>  Charlie Rawstorn</p>
              <i class="fas fa-envelope"></i> <a href="mailto:c.rawstorn@gmail.com"> c.rawstorn@gmail.com</a>
              <p><i class="fas fa-phone"></i>  027 3466 031</p>
              <i class="fab fa-github"></i><a href="https://github.com/rawturtle">  rawturtle</a>
            </div>
          </div>
        </div>
      </div>

      <div class="tile is-parent is-5 is-vertical">
        <div class="tile is-child about">
          <div class="card">
            <header class="card-header">
              <p class="card-header-title">
                About Me
              </p>
            </header>
            <div class="card-content">
              <div class="content">
                <p>I was living in Melbourne teaching students how to SCUBA dive for a year before deciding to leave my
                  underwater office and head to dry(ish) land in Otago.</p>

                <p>Studying Computer Science helped me understand how I learn, and how to break problems down into the
                  smaller easier to solve sub-problems.</p>

                <p>I enjoy the challenges that being a developer offers as I am very determined and goal orientated.</p>

              </div>
            </div>
          </div>
        </div>
        <div class="tile is-child interests">
          <div class="card">
            <header class="card-header">
              <p class="card-header-title">
                Interests
              </p>
            </header>
            <div class="card-content">
              <div class="content">
                <p>I spend most of my time obsessing over upcoming swells/weather patterns and the latest tech trends on
                  <a href="https://medium.com">Medium</a> and <a href="https://reddit.com">Reddit</a></p>
                <p>My interests include:</p>
                <ul>
                  <li>Surfing</li>
                  <li>More surfing</li>
                  <li>Coding</li>
                  <li>Video Games</li>
                  <li>Skateboarding</li>
                  <li>Tramping</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="tile is-parent is-3">
        <div class="tile is-child education">
        <div class="card">
          <header class="card-header">
            <p class="card-header-title">
              Education
            </p>
          </header>
          <div class="content">

            <div class="card">
              <div class="card-content">
                <p><i class="fas fa-calendar-alt"></i>  <strong>2015 - 2017</strong></p>
                <p><i class="fas fa-university"></i>  University of Otago</p>
                <p><i class="fas fa-graduation-cap"></i>  BSc majoring in Computer Science</p>
              </div>
            </div>

            <div class="card">
              <div class="card-content">
                <p><i class="fas fa-calendar-alt"></i>  <strong>2013</strong></p>
                <p><i class="fas fa-university"></i>  Dive Otago</p>
                <p><i class="fas fa-graduation-cap"></i>  Diploma in Professional SCUBA Instruction</p>
              </div>
            </div>

            <div class="card">
              <div class="card-content">
                <p><i class="fas fa-calendar-alt"></i>  <strong>2012</strong></p>
                <p><i class="fas fa-university"></i>  Outward Bound</p>
                <p><i class="fas fa-graduation-cap"></i>  Certificate of Completion</p>
              </div>
            </div>

            <div class="card">
              <div class="card-content">
                <p><i class="fas fa-calendar-alt"></i>  <strong>2009</strong></p>
                <p><i class="fas fa-university"></i>  CPIT</p>
                <p><i class="fas fa-graduation-cap"></i>  Certificate of Adventure Recreation</p>

              </div>
            </div>
          </div>
        </div>
      </div>
      </div>

    </div>
  </div>
</template>

<script>
  export default{
    name: 'home'
  }
</script>

<style scoped>
  i {
    width: 20px;
  }
  ul {
    margin-top: 0!important;
  }
  .card-header-title{
    /*background-color: #e7e7e7;*/
    background-color: #ADD8E6;

  }

</style>
