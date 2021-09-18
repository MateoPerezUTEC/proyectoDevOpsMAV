pipeline {
    agent{
        docker{
            image 'node'
            args '-p 7000:7000'
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
        stage('Aprobar deploy'){
            steps{
                input message: 'Finished using the web site? (Click "Proceed" to continue)'
            }
        }
        stage('Deploy'){
            steps{
                sh 'npm run start'
            }
        }
    }
}
