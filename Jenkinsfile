pipeline {
    agent{
        docker{
            image 'node:16.9-alpine3.11'
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
