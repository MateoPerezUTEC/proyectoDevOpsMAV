pipeline {
    agent{
        docker{
            image 'node:12'
            args '-p 7000:7000'
        }
    }

    stages{
        stage('Build'){
            steps {
                sh 'npm install'
            }
        }
    }
}
