pipeline {
    agent any

    stages {
        stage('Deploy') {
            when {
                branch pattern: '^(master|main)$|stable|release', comparator: 'REGEXP'
            }

            steps {
                ansiblePlaybook colorized: true, credentialsId: 'rivendell-ssh-key', disableHostKeyChecking: true, playbook: 'install.yaml'
            }
        }
    }

    post {
        cleanup {
            cleanWs()
        }
    }
}
