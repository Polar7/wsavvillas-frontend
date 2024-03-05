pipeline {
    agent any

    stages {

        stage('Docker Build') {
            steps{
                // Construye la imagen de la aplicacion de angular (el dockerfile ejecuta el npm build de angular)
                sh 'docker build -t angular/webserviceavvillas-front .'
            }
        }
        stage('Docker Previous Container Stop') {
            steps {
                // Detener un contenedor previo, si existe
                sh 'docker stop container_angular_avvillas || true'
            }
        }
        stage('Docker Container Run') {
            steps {
                // Ejecuta un contenedor usando la imagen previa
                sh 'docker run -d --name container_angular_avvillas --rm -p 4200:4200 angular/webserviceavvillas-front'
            }
        }
    }
    post {
        success {
            // Acciones que se ejecutaran solo si el pipeline se completa exitosamente
            echo 'El pipeline se completo exitosamente'
        }
    }
}
