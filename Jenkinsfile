pipeline {
  agent any
  stages {
    stage('Checkout') {
      steps {
        git url: 'https://github.com/tienloinguyen22/cost-com.git'
      }
    }
    stage('List file') {
      steps {
        sh 'ls -l'
      }
    }
  }
}