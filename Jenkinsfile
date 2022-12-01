pipeline {
    agent any
    tools {
        nodejs '19.1.0'
    }
    environment {
        HEROKU_APP = 'https://ip-1-nodejs-heroku.herokuapp.com/'
        GITHUB_REPO = 'https://github.com/auvagha-jb/gallery'
    }
    stages {
        stage('Clone Project') {
            steps {
                git 'https://github.com/auvagha-jb/gallery'
            }
        }
        stage('Install dependencies') {
            steps {
                sh 'npm install'
            }
        }
        stage('Run Tests') {
            steps {
                sh 'npm test'
            }
        }
        stage('Deploy to Heroku') {
            steps {
                withCredentials([usernameColonPassword(credentialsId: 'heroku', variable: 'HEROKU_CREDENTIALS' )]){
                    sh "git push https://${HEROKU_CREDENTIALS}@git.heroku.com/ip-1-nodejs-heroku.git master"
                }
            }
        }
    }
    post {
        success {
            slackSend color: "good", message: "Success build for ${JOB_NAME} build id: #${BUILD_ID} \n App Url: ${HEROKU_APP} \n Github repo: ${GITHUB_REPO}"
        }
        failure {
            emailext body: "Build id: #${BUILD_ID} for ${JOB_NAME} failed", subject: 'Buiild Failed', to: 'jerrybenjamin007@gmail.com'
        }
    }
}