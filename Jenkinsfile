pipeline {
    agent{
        docker{
            image 'node'
            args '-p 7000:7000'
        }
    enviroment{
        HOME = '.'
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
