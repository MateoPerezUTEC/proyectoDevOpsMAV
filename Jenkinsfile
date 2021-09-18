pipeline {
    agent{
        docker{
            image 'node'
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
