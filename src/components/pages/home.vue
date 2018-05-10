<template>
  <div class="is-ancestor">
    <div class="columns">

      <div class="column">
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

      <div class="column">
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
          </div>
        </div>
      </div>

      <div class="column">
        <div class="card">
          <header class="card-header">
            <p class="card-header-title">
              About Me
            </p>
          </header>
          <div class="card-content">
            <div class="content">
              <p>
                I am looking for work in the Technology Industry. I have a passion for developing and enjoy learning new skills. blahahahhaha
              </p>
            </div>
          </div>
        </div>
        <div class="gap"></div>
        <div class="card">
          <header class="card-header">
            <p class="card-header-title">
              Interests
            </p>
          </header>
          <div class="card-content">
            <div class="content">
              <ul>
                <li>Surfing</li>
                <li>Spearfishing</li>
                <li>Skateboarding</li>
                <li>Tramping</li>
                <li>Coding</li>
              </ul>
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

<style>
  i {
    width: 20px;
  }
  ul {
    margin-top: 0!important;
  }
  .card-header {
    background-color: #e7e7e7;
  }
  .gap {
    height: 24px;
  }
</style>
