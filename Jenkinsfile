pipeline {
    agent{
        docker{
            image 'node'
            args '-p 7000:7000'

            image 'mysql'
        }
    }
    environment{
        HOME = '.'
    }

    stages{
        stage('Build'){
            steps {
                sh 'npm install'
            }
        }
        stage('Test'){
            steps{
                sh 'echo aca iria el test'
            }
        }
    }
}
