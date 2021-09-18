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
                sh 'docker pull mysql/mysql-server:latest'
                sh 'docker run --name=uptasknode -p 3306:3306 -e MYSQL_ROOT_PASSWORD=123456 -d mysql/mysql-server:8.0'
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
