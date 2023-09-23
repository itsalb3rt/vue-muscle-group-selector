<template>
  <main class="muscle-groups-container">
    <div class="muscle-groups">
      <h2 class="list-title">{{ translations.arms.arms }}</h2>
      <input type="checkbox" class="biceps muscles-helper" id="biceps" />
      <label for="biceps">{{ translations.arms.biceps }}</label>
      <input type="checkbox" class="deltoids muscles-helper" id="deltoids" />
      <label for="deltoids">{{ translations.arms.deltoids }}</label>
      <input type="checkbox" class="forearms muscles-helper" id="forearms" />
      <label for="forearms">{{ translations.arms.forearms }}</label>
      <input type="checkbox" class="triceps muscles-helper" id="triceps" />
      <label for="triceps">{{ translations.arms.triceps }}</label>
      <h2 class="list-title">{{ translations.back.back }}</h2>
      <input type="checkbox" class="trapezius muscles-helper" id="trapezius" />
      <label for="trapezius">{{ translations.back.trapezius }}</label>
      <input type="checkbox" class="lats muscles-helper" id="lats" />
      <label for="lats">{{ translations.back.lats }}</label>
      <h2 class="list-title">{{ translations.core.core }}</h2>
      <input type="checkbox" class="abs muscles-helper" id="abs" />
      <label for="abs">Abs</label>
      <input type="checkbox" class="obliques muscles-helper" id="obliques" />
      <label for="obliques">{{ translations.core.obliques }}</label>
      <input type="checkbox" class="pectorals muscles-helper" id="pectorals" />
      <label for="pectorals">{{ translations.core.pectorals }}</label>
      <h2 class="list-title">{{ translations.legs.legs }}</h2>
      <input type="checkbox" class="adductors muscles-helper" id="adductors" />
      <label for="adductors">{{ translations.legs.adductors }}</label>
      <input type="checkbox" class="calves muscles-helper" id="calves" />
      <label for="calves">{{ translations.legs.calves }}</label>
      <input
        type="checkbox"
        class="hamstrings muscles-helper"
        id="hamstrings"
      />
      <label for="hamstrings">{{ translations.legs.hamstrings }}</label>
      <input type="checkbox" class="glutes muscles-helper" id="glutes" />
      <label for="glutes">{{ translations.legs.glutes }}</label>
      <input type="checkbox" class="quads muscles-helper" id="quads" />
      <label for="quads">{{ translations.legs.quads }}</label>
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 176 207"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        xml:space="preserve"
        :style="{
          fillRule: 'evenodd',
          clipRule: 'evenodd',
          strokeLinejoin: 'round',
          strokeMiterlimit: 1.41421,
        }"
      >
        <rect
          id="Artboard1"
          x="0"
          y="0"
          width="175.551"
          height="206.785"
          style="fill: none"
        />
        <g id="Back-Muscles">
          <g>
            <g id="Trapezius">
              <g>
                <path
                  :class="`${
                    readOnly ? 'disabled-pointer-events' : null
                  } Trapezius`"
                  d="M129.543,76.453c0.075,0.385 0.737,-2.948 1.567,-2.58c0.829,0.369 1.852,2.584 1.842,2.488c-0.26,-2.728 2.184,-6.972 3.963,-9.859c1.932,-3.136 2.94,-3.318 4.238,-7.371c0.517,-1.615 0,-12.163 2.211,-16.033c2.212,-3.869 3.778,-3.473 5.437,-4.422c0.362,-0.207 -13.577,-1.309 -14.779,-10.719c-0.198,-1.556 -0.211,-2.973 0.036,-4.392c0.247,-1.42 -7.247,-1.995 -7.647,-0.092c-0.612,2.906 4.562,11.205 -13.084,13.913c-1.239,0.19 3.655,2.08 6.357,6.173c0.659,0.998 0.647,3.367 2.672,16.678c0.453,2.976 6.322,11.786 7.187,16.216Z"
                  style="fill: #262626"
                />
              </g>
            </g>
            <g id="Lats">
              <path
                :class="`${readOnly ? 'disabled-pointer-events' : null}`"
                d="M134.34,75.599c0,0 5.048,5.158 5.597,8.231c0.549,3.073 0.557,8.648 3.183,8.231c0.035,-0.005 -0.895,-2.038 0.325,-4.136c4.193,-7.206 4.394,-15.619 4.394,-15.619l1.427,-13.718c0,0 -3.915,1.393 -7.024,-0.659c-0.623,-0.411 -0.256,4.772 -3.251,7.473c-1.226,1.105 -5.858,7.124 -4.651,10.197Z"
                style="fill: #404040"
              />
              <path
                :class="`${readOnly ? 'disabled-pointer-events' : null}`"
                d="M127.775,75.599c0,0 -5.049,5.158 -5.597,8.231c-0.549,3.073 -0.557,8.648 -3.183,8.231c-0.035,-0.005 0.895,-2.038 -0.326,-4.136c-4.192,-7.206 -4.393,-15.619 -4.393,-15.619l-1.427,-13.718c0,0 3.915,1.393 7.024,-0.659c0.623,-0.411 0.255,4.772 3.251,7.473c1.226,1.105 5.858,7.124 4.651,10.197Z"
                style="fill: #404040"
              />
            </g>
            <g id="Triceps">
              <path
                :class="`${readOnly ? 'disabled-pointer-events' : null}`"
                d="M149.266,49.372c0,0 3.715,-2.597 5.023,-1.85c1.309,0.748 3.739,5.515 4.02,7.478c0.28,1.963 1.495,17.573 1.495,17.573c0,0 -0.467,1.945 -1.776,2.422c-1.308,0.476 -1.121,-4.059 -2.113,-4.555c-0.991,-0.496 -0.045,3.516 -1.037,3.832c-0.991,0.315 -3.876,-1.082 -3.876,-1.082l-2.194,-6.446c0,0 2.058,-13.917 0.458,-17.372Z"
                style="fill: #333"
              />
              <path
                :class="`${readOnly ? 'disabled-pointer-events' : null}`"
                d="M112.671,49.372c0,0 -3.715,-2.597 -5.023,-1.85c-1.309,0.748 -3.739,5.515 -4.02,7.478c-0.28,1.963 -1.495,17.573 -1.495,17.573c0,0 0.467,1.945 1.776,2.422c1.308,0.476 1.121,-4.059 2.113,-4.555c0.991,-0.496 0.045,3.516 1.036,3.832c0.992,0.315 3.877,-1.082 3.877,-1.082l2.194,-6.446c0,0 -2.058,-13.917 -0.458,-17.372Z"
                style="fill: #333"
              />
            </g>
            <g id="Forearms">
              <path
                :class="`${readOnly ? 'disabled-pointer-events' : null}`"
                d="M159.804,73.41c0,0 3.727,5.905 4.477,10.404c0.75,4.499 -0.094,13.404 2.062,15.466c2.156,2.062 -6.235,3.749 -6.539,1.687c-0.303,-2.062 -9.5,-17.601 -8.458,-20.433c0.282,-0.766 -0.281,-7.405 -0.281,-7.405l3.241,1.866c0,0 0.696,2.821 -0.898,3.664c-1.593,0.844 0.938,3.281 1.969,2.25c1.031,-1.031 1.687,-3 2.905,-3.375c1.219,-0.375 -0.937,-2.104 -0.187,-2.504c0.75,-0.401 1.709,-1.62 1.709,-1.62Z"
                style="fill: #595959"
              />
              <path
                :class="`${readOnly ? 'disabled-pointer-events' : null}`"
                d="M102.444,73.41c0,0 -3.727,5.905 -4.477,10.404c-0.75,4.499 0.094,13.404 -2.062,15.466c-2.156,2.062 6.236,3.749 6.539,1.687c0.303,-2.062 9.5,-17.601 8.458,-20.433c-0.282,-0.766 0.281,-7.405 0.281,-7.405l-3.241,1.866c0,0 -0.696,2.821 0.898,3.664c1.593,0.844 -0.937,3.281 -1.968,2.25c-1.032,-1.031 -1.688,-3 -2.906,-3.375c-1.219,-0.375 0.937,-2.104 0.187,-2.504c-0.749,-0.401 -1.709,-1.62 -1.709,-1.62Z"
                style="fill: #595959"
              />
            </g>
            <g id="Glutes">
              <path
                :class="`${readOnly ? 'disabled-pointer-events' : null}`"
                d="M116.292,89.962c0.806,-0.134 13.533,6.223 14.226,16.039c0.693,9.815 -6.928,13.33 -13.359,11.611c-6.43,-1.719 -5.954,-9.396 -5.786,-11.242c0.12,-1.318 1.27,-4.277 2.315,-11.444c0.181,-1.241 1.798,-4.83 2.604,-4.964Z"
                style="fill: #1a1a1a"
              />
              <path
                :class="`${readOnly ? 'disabled-pointer-events' : null}`"
                d="M147.461,91.166c-0.718,-0.286 -13.58,3.525 -15.977,13.028c-2.396,9.503 3.994,14.407 10.225,13.947c6.231,-0.459 7.168,-8.085 7.344,-9.93c0.126,-1.316 -0.403,-4.44 -0.083,-11.675c0.056,-1.253 -0.79,-5.085 -1.509,-5.37Z"
                style="fill: #1a1a1a"
              />
            </g>
            <g id="Hamstrings">
              <path
                :class="`${readOnly ? 'disabled-pointer-events' : null}`"
                d="M134.031,118.726c0,0 12.347,0.487 14.305,-1.231c1.959,-1.718 2.481,9.396 0,21.406c-2.48,12.01 -0.916,13.351 -1.279,13.035c-2.739,-2.372 -4.386,-8.297 -4.578,-8.153c-0.152,0.115 -5.704,8.313 -4.791,14.7c0.052,0.368 -5.202,-28.975 -5.985,-32.542c-0.783,-3.567 -1.965,-6.826 2.328,-7.215Z"
                style="fill: #333"
              />
              <path
                :class="`${readOnly ? 'disabled-pointer-events' : null}`"
                d="M127.912,118.726c0,0 -12.283,0.487 -14.231,-1.231c-1.947,-1.718 -2.467,9.396 0,21.406c2.468,12.01 0.912,13.351 1.273,13.035c2.725,-2.372 4.363,-8.297 4.554,-8.153c0.152,0.115 5.675,8.313 4.767,14.7c-0.052,0.368 5.175,-28.975 5.954,-32.542c0.778,-3.567 0.171,-7.106 -2.317,-7.215Z"
                style="fill: #333"
              />
            </g>
            <g id="Calves">
              <path
                :class="`${readOnly ? 'disabled-pointer-events' : null}`"
                d="M142.885,152.39c0,0 -5.718,7.108 -6.096,10.007c-0.378,2.898 -0.387,16.918 0.677,19.353c0.779,1.782 4.588,-3.96 5.545,-7.56c0.956,-3.6 -0.014,3.34 2.394,5.922c0.407,0.436 4.674,-13.753 3.447,-18.453c-1.702,-6.519 -2.344,-8.369 -1.913,-11.391c0.678,-4.752 -2.574,2.122 -3.046,4.264c-0.472,2.142 -1.008,-2.142 -1.008,-2.142Z"
                style="fill: #4d4d4d"
              />
              <path
                :class="`${readOnly ? 'disabled-pointer-events' : null}`"
                d="M119.244,152.39c0,0 5.718,7.108 6.096,10.007c0.378,2.898 0.387,16.918 -0.677,19.353c-0.779,1.782 -4.588,-3.96 -5.545,-7.56c-0.957,-3.6 0.014,3.34 -2.394,5.922c-0.407,0.436 -4.674,-13.753 -3.447,-18.453c1.702,-6.519 2.344,-8.369 1.913,-11.391c-0.678,-4.752 2.574,2.122 3.046,4.264c0.472,2.142 1.008,-2.142 1.008,-2.142Z"
                style="fill: #4d4d4d"
              />
            </g>
          </g>
        </g>
        <g id="Front-Muscles">
          <g id="Deltoids">
            <path
              :class="`${readOnly ? 'disabled-pointer-events' : null}`"
              d="M35.684,38.139c0,0 -12.432,-7.085 -17.512,3.476c-1.869,3.885 -0.459,16.146 -0.401,16.71c0.038,0.373 3.69,-7.88 6.817,-9.625c0.537,-0.299 -0.144,-8.31 11.096,-10.561Z"
              style="fill: #333"
            />
            <path
              :class="`${readOnly ? 'disabled-pointer-events' : null}`"
              d="M52.463,38.139c0,0 12.432,-7.085 17.512,3.476c1.869,3.885 0.459,16.146 0.401,16.71c-0.038,0.373 -3.69,-7.88 -6.818,-9.625c-0.536,-0.299 0.145,-8.31 -11.095,-10.561Z"
              style="fill: #333"
            />
          </g>
          <g id="Biceps">
            <path
              :class="`${readOnly ? 'disabled-pointer-events' : null}`"
              d="M25.232,48.934c0,0 1.105,16.785 -0.186,17.535c-1.481,0.86 -2.239,9.14 -2.239,9.14c0,0 -0.746,-2.099 -1.585,-2.005c-0.84,0.093 -2.425,1.679 -2.752,2.238c-0.326,0.56 -5.223,-17.301 6.762,-26.908Z"
              style="fill: #404040"
            />
            <path
              :class="`${readOnly ? 'disabled-pointer-events' : null}`"
              d="M63.528,51.098c0,0 -1.105,16.784 0.187,17.534c1.481,0.861 2.238,9.141 2.238,9.141c0,0 0.746,-2.099 1.586,-2.005c0.839,0.093 2.425,1.678 2.751,2.238c0.327,0.56 5.223,-17.302 -6.762,-26.908Z"
              style="fill: #404040"
            />
          </g>
          <g id="Pectorals">
            <path
              :class="`${readOnly ? 'disabled-pointer-events' : null}`"
              d="M42.057,40.112c-0.311,3.984 2.007,8.955 2.037,11.938c0.04,4.039 -0.33,7.303 -7.463,8.098c-5.733,0.638 -7.022,-1.737 -8.88,-2.919c-1.159,-0.738 -1.515,-8.373 -2.573,-9.527c-0.723,-0.788 3.991,-8.909 10.523,-8.851c6.532,0.057 6.421,0.425 6.356,1.261Z"
              style="fill: #595959"
            />
            <path
              :class="`${readOnly ? 'disabled-pointer-events' : null}`"
              d="M46.136,40.112c0.311,3.984 -2.008,8.955 -2.037,11.938c-0.04,4.039 0.329,7.303 7.463,8.098c5.733,0.638 7.022,-1.737 8.879,-2.919c1.16,-0.738 1.515,-8.373 2.574,-9.527c0.723,-0.788 -3.991,-8.909 -10.523,-8.851c-6.533,0.057 -6.422,0.425 -6.356,1.261Z"
              style="fill: #595959"
            />
          </g>
          <g id="Obliques">
            <path
              :class="`${readOnly ? 'disabled-pointer-events' : null}`"
              d="M36.007,62.836c0,0 1.395,31.809 0,32.945c-1.394,1.136 -1.678,-6.343 -6.79,-7.195c-0.953,-0.159 -0.163,-17.23 -2.449,-21.3c-2.285,-4.071 8.267,-5.775 9.239,-4.45Z"
              style="fill: #262626"
            />
            <path
              :class="`${readOnly ? 'disabled-pointer-events' : null}`"
              d="M51.917,62.836c0,0 -1.395,31.809 0,32.945c1.394,1.136 1.678,-6.343 6.79,-7.195c0.953,-0.159 0.163,-17.23 2.449,-21.3c2.285,-4.071 -8.267,-5.775 -9.239,-4.45Z"
              style="fill: #262626"
            />
          </g>
          <g id="Abs">
            <path
              :class="`${readOnly ? 'disabled-pointer-events' : null}`"
              d="M44.343,60.277c0,0 -5.885,-1.868 -8.56,1.474c-2.675,3.341 0.465,16.298 -0.248,21.113c-0.713,4.815 3.292,24.8 5.331,25.563c1.267,0.475 2.143,0.569 3.567,-0.089c1.256,-0.58 7.126,-13.883 7.896,-25.594c0.356,-5.416 4.855,-21.729 -2.992,-22.913c-4.539,-0.685 -4.994,0.446 -4.994,0.446Z"
              style="fill: #595959"
            />
          </g>
          <g id="Quads">
            <path
              :class="`${readOnly ? 'disabled-pointer-events' : null}`"
              d="M31.536,95.898c0,0 11.073,23.633 10.268,34.698c-0.805,11.065 -2.012,14.887 -2.012,17.704c0,2.816 0.361,-4.209 -3.165,-4.225c-4.132,-0.019 -7.219,3.332 -8.338,7.023c-0.159,0.527 -0.999,-10.497 -0.999,-10.497c0,0 -1.416,-3.038 -2.386,-13.241c-1.468,-15.448 10.299,-21.015 6.632,-31.462"
              style="fill: #333"
            />
            <path
              :class="`${readOnly ? 'disabled-pointer-events' : null}`"
              d="M56.329,95.898c0,0 -11.073,23.633 -10.268,34.698c0.804,11.065 2.012,14.887 2.012,17.704c0,2.816 -0.361,-4.209 3.165,-4.225c4.131,-0.019 7.219,3.332 8.337,7.023c0.16,0.527 0.999,-10.497 0.999,-10.497c0,0 1.417,-3.038 2.387,-13.241c1.468,-15.448 -10.299,-21.015 -6.632,-31.462"
              style="fill: #333"
            />
          </g>
          <g id="Adductors">
            <path
              :class="`${readOnly ? 'disabled-pointer-events' : null}`"
              d="M34.684,93.947c0,0 4.231,11.716 5.884,14.86c2.454,4.668 3.854,8.447 3.487,9.049c-0.368,0.602 -1.254,9.8 -1.32,8.966c-0.474,-6.017 -7.45,-29.324 -8.592,-30.924c-0.63,-0.882 0.537,-1.957 0.541,-1.951Z"
              style="fill: #4d4d4d"
            />
            <path
              :class="`${readOnly ? 'disabled-pointer-events' : null}`"
              d="M53.036,93.947c0,0 -4.231,11.716 -5.884,14.86c-2.454,4.668 -3.854,8.447 -3.487,9.049c0.368,0.602 1.254,9.8 1.32,8.966c0.474,-6.017 7.45,-29.324 8.592,-30.924c0.63,-0.882 -0.537,-1.957 -0.541,-1.951Z"
              style="fill: #4d4d4d"
            />
          </g>
        </g>
        <path
          id="Front"
          d="M44.055,118.158c-0.3,3.531 3.185,22.306 4.422,29.636c0.589,3.472 2.204,9.13 1.623,12.134c-0.83,4.187 -1.07,9.604 -0.613,12.759c0.288,1.916 1.195,10.752 -0.103,13.984c-0.678,1.695 -1.922,10.38 -1.922,10.38c-3.241,8.182 -1.412,7.779 -1.412,7.779c1.003,1.231 2.722,0.097 2.722,0.097c1.309,0.834 2.215,-0.198 2.215,-0.198c1.124,0.93 2.434,-0.115 2.434,-0.115c1.412,0.733 2.721,-0.618 2.721,-0.618c0.811,0.408 1.009,-0.108 1.009,-0.108c2.433,-0.156 -1.357,-7.941 -1.357,-7.941c-0.908,-6.993 0.9,-10.884 0.9,-10.884c5.923,-17.565 6.224,-22.226 3.856,-28.845c-0.666,-1.911 -0.835,-2.668 -0.528,-3.497c0.709,-1.915 0.192,-9.617 1.057,-12.675c1.669,-5.898 3.316,-20.856 4.174,-27.836c1.153,-9.401 -4.085,-22.007 -4.085,-22.007c-1.147,-5.129 0.535,-23.406 0.535,-23.406c2.349,3.655 2.259,10.107 2.259,10.107c-0.373,6.766 5.466,17.107 5.466,17.107c2.806,4.274 3.868,8.328 3.868,8.629c0,1.231 -0.269,4.212 -0.269,4.212l0.107,2.595c0.049,0.661 0.42,2.937 0.36,4.037c-0.438,6.769 0.638,5.495 0.638,5.495c0.907,0 1.904,-5.447 1.904,-5.447c0,1.405 -0.343,5.61 0.415,7.197c0.906,1.892 1.573,-0.325 1.585,-0.77c0.24,-8.619 0.758,-6.361 0.758,-6.361c0.504,6.992 1.123,8.572 2.234,8.025c0.842,-0.401 0.072,-8.391 0.072,-8.391c1.441,4.746 2.534,5.502 2.534,5.502c2.379,1.67 0.908,-2.943 0.578,-3.856c-1.76,-4.854 -1.815,-6.536 -1.815,-6.536c2.199,4.361 3.857,4.2 3.857,4.2c2.144,-0.685 -1.875,-6.86 -4.23,-9.819c-1.201,-1.507 -2.751,-3.526 -3.201,-4.724c-0.733,-2.03 -1.286,-8.557 -1.286,-8.557c-0.222,-7.702 -2.126,-11.047 -2.126,-11.047c-3.255,-5.211 -3.868,-14.93 -3.868,-14.93l-0.144,-16.411c-1.141,-11.194 -9.389,-11.274 -9.389,-11.274c-8.337,-1.241 -9.497,-3.935 -9.497,-3.935c-1.766,-2.541 -0.757,-7.412 -0.757,-7.412c1.465,-1.192 2.03,-4.355 2.03,-4.355c2.433,-1.866 2.313,-4.596 1.19,-4.566c-0.902,0.024 -0.698,-0.723 -0.698,-0.723c1.522,-12.288 -9.387,-12.915 -9.387,-12.915l-1.665,0c0,0 -10.914,0.627 -9.395,12.912c0,0 0.204,0.748 -0.705,0.723c-1.121,-0.03 -1.225,2.7 1.199,4.566c0,0 0.564,3.162 2.03,4.355c0,0 1.009,4.871 -0.757,7.412c0,0 -1.156,2.694 -9.497,3.935c0,0 -8.262,0.08 -9.385,11.274l-0.156,16.411c0,0 -0.601,9.719 -3.869,14.93c0,0 -1.895,3.346 -2.114,11.047c0,0 -0.556,6.527 -1.286,8.557c-0.445,1.192 -1.993,3.211 -3.205,4.724c-2.375,2.953 -6.368,9.115 -4.232,9.819c0,0 1.666,0.161 3.856,-4.2c0,0 -0.045,1.67 -1.802,6.536c-0.345,0.901 -1.814,5.514 0.565,3.856c0,0 1.102,-0.757 2.535,-5.502c0,0 -0.769,7.99 0.086,8.391c1.118,0.548 1.728,-1.033 2.232,-8.025c0,0 0.517,-2.258 0.756,6.361c0.012,0.445 0.664,2.662 1.575,0.77c0.768,-1.587 0.423,-5.785 0.423,-7.197c0,0 0.986,5.448 1.907,5.448c0,0 1.084,1.273 0.639,-5.496c-0.072,-1.106 0.316,-3.376 0.364,-4.037l0.105,-2.595c0,0 -0.271,-2.974 -0.271,-4.212c0,-0.307 1.064,-4.355 3.869,-8.629c0,0 5.833,-10.346 5.457,-17.107c0,0 -0.081,-6.452 2.268,-10.107c0,0 1.667,18.276 0.537,23.406c0,0 -5.247,12.606 -4.09,22.007c0.853,6.998 2.496,21.937 4.169,27.836c0.874,3.052 0.357,10.752 1.058,12.675c0.316,0.835 0.15,1.605 -0.529,3.497c-2.355,6.619 -2.055,11.281 3.868,28.845c0,0 1.823,3.892 0.902,10.884c0,0 -3.784,7.785 -1.361,7.941c0,0 0.19,0.516 1.01,0.108c0,0 1.309,1.351 2.723,0.618c0,0 1.31,1.046 2.43,0.115c0,0 0.898,1.032 2.207,0.198c0,0 1.718,1.159 2.739,-0.097c0,0 1.814,0.403 -1.415,-7.779c0,0 -1.237,-8.675 -1.919,-10.38c-1.3,-3.231 -0.382,-12.086 -0.105,-13.984c0.447,-3.172 0.208,-8.577 -0.609,-12.759c-0.598,-2.997 1.021,-8.656 1.619,-12.134c1.228,-7.323 4.403,-29.633 4.403,-29.633Z"
          :style="`fill: none; stroke: ${strokeColor}; stroke-width: 1px`"
        />
        <path
          id="Back"
          d="M130.969,118.158c-0.3,3.531 3.184,22.306 4.422,29.636c0.588,3.472 2.203,9.13 1.622,12.134c-0.829,4.187 -1.069,9.604 -0.612,12.759c0.288,1.916 1.194,10.752 -0.103,13.984c-0.679,1.695 -1.923,10.38 -1.923,10.38c-3.24,8.182 -1.411,7.779 -1.411,7.779c1.003,1.231 2.721,0.097 2.721,0.097c1.31,0.834 2.216,-0.198 2.216,-0.198c1.124,0.93 2.434,-0.115 2.434,-0.115c1.411,0.733 2.721,-0.618 2.721,-0.618c0.81,0.408 1.009,-0.108 1.009,-0.108c2.432,-0.156 -1.358,-7.941 -1.358,-7.941c-0.907,-6.993 0.901,-10.884 0.901,-10.884c5.923,-17.565 6.224,-22.226 3.856,-28.845c-0.667,-1.911 -0.835,-2.668 -0.529,-3.497c0.71,-1.915 0.193,-9.617 1.058,-12.675c1.669,-5.898 3.316,-20.856 4.174,-27.836c1.153,-9.401 -4.085,-22.007 -4.085,-22.007c-1.148,-5.129 0.534,-23.406 0.534,-23.406c2.349,3.655 2.26,10.107 2.26,10.107c-0.373,6.766 5.466,17.107 5.466,17.107c2.805,4.274 3.868,8.328 3.868,8.629c0,1.231 -0.27,4.212 -0.27,4.212l0.108,2.595c0.048,0.661 0.42,2.937 0.36,4.037c-0.438,6.769 0.637,5.495 0.637,5.495c0.908,0 1.905,-5.447 1.905,-5.447c0,1.405 -0.343,5.61 0.415,7.197c0.906,1.892 1.573,-0.325 1.585,-0.77c0.24,-8.619 0.757,-6.361 0.757,-6.361c0.505,6.992 1.124,8.572 2.235,8.025c0.841,-0.401 0.072,-8.391 0.072,-8.391c1.441,4.746 2.534,5.502 2.534,5.502c2.379,1.67 0.908,-2.943 0.577,-3.856c-1.76,-4.854 -1.814,-6.536 -1.814,-6.536c2.199,4.361 3.856,4.2 3.856,4.2c2.145,-0.685 -1.874,-6.86 -4.229,-9.819c-1.201,-1.507 -2.751,-3.526 -3.201,-4.724c-0.733,-2.03 -1.286,-8.557 -1.286,-8.557c-0.222,-7.702 -2.126,-11.047 -2.126,-11.047c-3.256,-5.211 -3.868,-14.93 -3.868,-14.93l-0.144,-16.411c-1.142,-11.194 -9.39,-11.274 -9.39,-11.274c-8.337,-1.241 -9.497,-3.935 -9.497,-3.935c-1.766,-2.541 -0.756,-7.412 -0.756,-7.412c1.465,-1.192 2.03,-4.355 2.03,-4.355c2.433,-1.866 2.313,-4.596 1.19,-4.566c-0.902,0.024 -0.698,-0.723 -0.698,-0.723c1.521,-12.288 -9.387,-12.915 -9.387,-12.915l-1.666,0c0,0 -10.913,0.627 -9.394,12.912c0,0 0.204,0.748 -0.705,0.723c-1.121,-0.03 -1.226,2.7 1.198,4.566c0,0 0.565,3.162 2.03,4.355c0,0 1.01,4.871 -0.756,7.412c0,0 -1.156,2.694 -9.497,3.935c0,0 -8.262,0.08 -9.386,11.274l-0.156,16.411c0,0 -0.6,9.719 -3.869,14.93c0,0 -1.895,3.346 -2.114,11.047c0,0 -0.555,6.527 -1.285,8.557c-0.445,1.192 -1.994,3.211 -3.205,4.724c-2.376,2.953 -6.368,9.115 -4.232,9.819c0,0 1.666,0.161 3.856,-4.2c0,0 -0.045,1.67 -1.802,6.536c-0.346,0.901 -1.814,5.514 0.565,3.856c0,0 1.102,-0.757 2.534,-5.502c0,0 -0.768,7.99 0.087,8.391c1.118,0.548 1.727,-1.033 2.232,-8.025c0,0 0.516,-2.258 0.756,6.361c0.012,0.445 0.664,2.662 1.575,0.77c0.768,-1.587 0.423,-5.785 0.423,-7.197c0,0 0.985,5.448 1.907,5.448c0,0 1.084,1.273 0.639,-5.496c-0.072,-1.106 0.316,-3.376 0.364,-4.037l0.105,-2.595c0,0 -0.271,-2.974 -0.271,-4.212c0,-0.307 1.064,-4.355 3.868,-8.629c0,0 5.833,-10.346 5.458,-17.107c0,0 -0.081,-6.452 2.268,-10.107c0,0 1.667,18.276 0.537,23.406c0,0 -5.247,12.606 -4.09,22.007c0.852,6.998 2.496,21.937 4.169,27.836c0.874,3.052 0.357,10.752 1.058,12.675c0.315,0.835 0.15,1.605 -0.529,3.497c-2.355,6.619 -2.055,11.281 3.868,28.845c0,0 1.823,3.892 0.902,10.884c0,0 -3.785,7.785 -1.361,7.941c0,0 0.19,0.516 1.009,0.108c0,0 1.309,1.351 2.724,0.618c0,0 1.31,1.046 2.43,0.115c0,0 0.898,1.032 2.207,0.198c0,0 1.718,1.159 2.739,-0.097c0,0 1.814,0.403 -1.416,-7.779c0,0 -1.237,-8.675 -1.918,-10.38c-1.3,-3.231 -0.382,-12.086 -0.105,-13.984c0.447,-3.172 0.207,-8.577 -0.609,-12.759c-0.598,-2.997 1.021,-8.656 1.618,-12.134c1.229,-7.323 4.404,-29.633 4.404,-29.633Z"
          :style="`fill: none; stroke: ${strokeColor}; stroke-width: 1px`"
        />
      </svg>
    </div>
  </main>
</template>

<script>
import { ref, onMounted } from 'vue';
export default {
  name: 'ComponentMuscleGroupsSelector',
  props: {
    /**
     * If true, the user can select multiple muscle groups, if false,
     * the user can only select one muscle group.
     */
    allowMultiple: {
      type: Boolean,
      default: false,
    },
    /**
     * The primary color of the component, this is the color of the
     * selected muscle groups.
     */
    primaryColor: {
      type: String,
      default: '#03001c',
    },
    /**
     * This is the color of the body figure, the outline of the body
     */
    strokeColor: {
      type: String,
      default: '#000',
    },
    /**
     * Array of muscle groups to be selected by default, this is the
     * ID of the muscle group, not the name.
     */
    initialValues: {
      type: Array,
      default: () => [],
    },
    /**
     * If true, the helper list of the muscle groups will be shown,
     * if false, the helper list will be hidden.
     */
    showMusclesListHelper: {
      type: Boolean,
      default: false,
    },
    /**
     * If true, the legs muscle groups will be shown, if false, the
     * legs muscle groups will be hidden.
     */
    showBackMuscles: {
      type: Boolean,
      default: true,
    },
    /**
     * If true, the back muscle groups will be shown, if false, the
     * back muscle groups will be hidden.
     */
    showFrontMuscles: {
      type: Boolean,
      default: true,
    },
    /**
     * Use with the initial values to only show the selected muscle group
     */
    readOnly: {
      type: Boolean,
      default: false,
    },
    /**
     * The translations of the muscle groups, the keys are the IDs of
     * the muscle groups, the values are the names of the muscle groups.
     */
    translations: {
      type: Object,
      default: () => ({
        arms: {
          arms: 'Arms',
          bicpes: 'Biceps',
          deltoids: 'Deltoids',
          forearms: 'Forearms',
          triceps: 'Triceps',
        },
        back: {
          back: 'Back',
          trapezius: 'Trapezius',
          lats: 'Lats',
        },
        core: {
          core: 'Core',
          abs: 'Abs',
          obliques: 'Obliques',
          pectorals: 'Pectorals',
        },
        legs: {
          legs: 'Legs',
          adductors: 'Adductors',
          calves: 'Calves',
          hamstrings: 'Hamstrings',
          glutes: 'Glutes',
          quads: 'Quads',
        },
      }),
    },
  },
  setup(props, { emit }) {
    const musculeGroupsContainerAlignItemsBind = ref('center');
    const musculeGroupsSVGPositionBind = ref('absolute');

    const onSelectMuscleGroup = () => {
      // get all the checked checkboxes
      const checked = document.querySelectorAll(
        '.muscle-groups input[type="checkbox"]:checked'
      );

      // get the values of the checked checkboxes
      const values = Array.from(checked).map((el) => el.id);

      // emit the values to the parent component
      emit('onSelect', values);
    };

    onMounted(() => {
      // set the initial values
      props.initialValues.forEach((value) => {
        if (document.getElementById(value)) {
          document.getElementById(value).checked = true;
        }
      });

      const checkboxes = document.querySelectorAll(
        '.muscle-groups input[type="checkbox"]'
      );

      checkboxes.forEach((checkbox) => {
        checkbox.addEventListener('change', () => {
          if (props.allowMultiple) {
            onSelectMuscleGroup();
            return;
          } else {
            checkboxes.forEach((checkbox) => {
              checkbox.checked = false;
            });
            checkbox.checked = true;
            onSelectMuscleGroup();
          }
        });
      });

      document
        .querySelectorAll('.muscle-groups svg g g[id]')
        .forEach(function (group) {

          group.addEventListener('click', function (el) {
            if (props.readOnly) {
              return;
            }

            let id = el.target.parentNode.id.toLowerCase();
            // To make a sure if no have a second parent
            if (!id) {
              id = el.target.parentNode.parentNode.id.toLowerCase();
            }

            let eventInput = document.getElementById(id);

            if (props.allowMultiple) {
              if (eventInput.checked) {
                eventInput.checked = false;
              } else {
                eventInput.checked = true;
              }
              onSelectMuscleGroup();
            } else {
              document
                .querySelectorAll('.muscle-groups input')
                .forEach(function (input) {
                  input.checked = false;
                });
              eventInput.checked = true;
              onSelectMuscleGroup();
            }
          });
        });

      // Hide the helper list if the user doesn't want it
      if (!props.showMusclesListHelper) {
        document
          .querySelectorAll('.muscle-groups-container label')
          .forEach((el) => {
            el.style.display = 'none';
          });

        document
          .querySelectorAll('.muscle-groups-container h2.list-title')
          .forEach((el) => {
            el.style.display = 'none';
          });
        musculeGroupsContainerAlignItemsBind.value = 'normal';
        musculeGroupsSVGPositionBind.value = 'none';
      }

      // Hide the front muscles if the user doesn't want it
      if (!props.showFrontMuscles) {
        document.querySelector(
          '.muscle-groups-container #Front-Muscles'
        ).style.display = 'none';
        document.querySelector(
          '.muscle-groups-container path#Front'
        ).style.display = 'none';
      }

      // Hide the back muscles if the user doesn't want it
      if (!props.showBackMuscles) {
        document.querySelector(
          '.muscle-groups-container #Back-Muscles'
        ).style.display = 'none';
        document.querySelector(
          '.muscle-groups-container path#Back'
        ).style.display = 'none';
      }

      if (!props.showFrontMuscles && props.showBackMuscles) {
        document.querySelector(
          '.muscle-groups-container #Back-Muscles'
        ).style.transform = 'translate(-100px, 0px)';
        document.querySelector(
          '.muscle-groups-container path#Back'
        ).style.transform = 'translate(-100px, 0px)';
      }
    });

    return {
      primaryColorBind: props.primaryColor,
      musculeGroupsContainerAlignItemsBind,
      musculeGroupsSVGPositionBind,
    };
  },
};
</script>
<style>
.muscle-groups {
  position: relative;
  width: 100%;
}
.muscle-groups h2 {
  margin: 0 0 0.5rem;
  font-size: 0.8rem;
  letter-spacing: -0.03em;
  text-transform: uppercase;
  text-align: left;
}
.muscle-groups label + h2 {
  margin-top: 1rem;
}
.muscle-groups label {
  width: 50px;
  display: block;
  margin-bottom: 0.5rem;
  cursor: pointer;
  font-size: 0.7rem;
  opacity: 0.5;
  position: relative;
  z-index: 200;
  border-left: 5px solid transparent;
  padding-left: 6px;
  margin-left: -11px;
}
.muscle-groups label:hover,
.muscle-groups label.hover {
  opacity: 1;
  border-color: rgba(51, 51, 51, 0.75);
}
.muscle-groups input:checked + label {
  opacity: 1;
  font-weight: bold;
  color: v-bind(primaryColorBind);
}
.muscle-groups svg {
  position: v-bind(musculeGroupsSVGPositionBind);
  right: -1.5rem;
  bottom: 3rem;
  height: 350px;
  z-index: 100;
  top: 10rem;
}
.muscle-groups svg g[id] path {
  opacity: 0.2;
  transition: opacity 0.25s ease-in-out;
}
.muscle-groups svg g g[id]:hover path {
  cursor: pointer;
  opacity: 0.5;
  fill: v-bind(primaryColorBind) !important;
}
.muscle-groups .muscles-helper {
  display: none;
}
.muscle-groups label[for='obliques']:hover ~ svg #Obliques path {
  opacity: 0.75;
}
.muscle-groups .obliques:checked ~ svg #Obliques path {
  opacity: 0.8;
  fill: v-bind(primaryColorBind) !important;
}
.muscle-groups label[for='abs']:hover ~ svg #Abs path {
  opacity: 0.75;
}
.muscle-groups .abs:checked ~ svg #Abs path {
  opacity: 0.8;
  fill: v-bind(primaryColorBind) !important;
}
.muscle-groups label[for='quads']:hover ~ svg #Quads path {
  opacity: 0.75;
}
.muscle-groups .quads:checked ~ svg #Quads path {
  opacity: 0.8;
  fill: v-bind(primaryColorBind) !important;
}
.muscle-groups label[for='biceps']:hover ~ svg #Biceps path {
  opacity: 0.75;
}
.muscle-groups .biceps:checked ~ svg #Biceps path {
  opacity: 0.8;
  fill: v-bind(primaryColorBind) !important;
}
.muscle-groups label[for='adductors']:hover ~ svg #Adductors path {
  opacity: 0.75;
}
.muscle-groups .adductors:checked ~ svg #Adductors path {
  opacity: 0.8;
  fill: v-bind(primaryColorBind) !important;
}
.muscle-groups label[for='pectorals']:hover ~ svg #Pectorals path {
  opacity: 0.75;
}
.muscle-groups .pectorals:checked ~ svg #Pectorals path {
  opacity: 0.8;
  fill: v-bind(primaryColorBind) !important;
}
.muscle-groups label[for='deltoids']:hover ~ svg #Deltoids path {
  opacity: 0.75;
}
.muscle-groups .deltoids:checked ~ svg #Deltoids path {
  opacity: 0.8;
  fill: v-bind(primaryColorBind) !important;
}
.muscle-groups label[for='hamstrings']:hover ~ svg #Hamstrings path {
  opacity: 0.75;
}
.muscle-groups .hamstrings:checked ~ svg #Hamstrings path {
  opacity: 0.8;
  fill: v-bind(primaryColorBind) !important;
}
.muscle-groups label[for='quads']:hover ~ svg #Quads path {
  opacity: 0.75;
}
.muscle-groups .quads:checked ~ svg #Quads path {
  opacity: 0.8;
  fill: v-bind(primaryColorBind) !important;
}
.muscle-groups label[for='forearms']:hover ~ svg #Forearms path {
  opacity: 0.75;
}
.muscle-groups .forearms:checked ~ svg #Forearms path {
  opacity: 0.8;
  fill: v-bind(primaryColorBind) !important;
}
.muscle-groups label[for='calves']:hover ~ svg #Calves path {
  opacity: 0.75;
}
.muscle-groups .calves:checked ~ svg #Calves path {
  opacity: 0.8;
  fill: v-bind(primaryColorBind) !important;
}
.muscle-groups label[for='triceps']:hover ~ svg #Triceps path {
  opacity: 0.75;
}
.muscle-groups .triceps:checked ~ svg #Triceps path {
  opacity: 0.8;
  fill: v-bind(primaryColorBind) !important;
}
.muscle-groups label[for='glutes']:hover ~ svg #Glutes path {
  opacity: 0.75;
}
.muscle-groups .glutes:checked ~ svg #Glutes path {
  opacity: 0.8;
  fill: v-bind(primaryColorBind) !important;
}
.muscle-groups label[for='lats']:hover ~ svg #Lats path {
  opacity: 0.75;
}
.muscle-groups .lats:checked ~ svg #Lats path {
  opacity: 0.8;
  fill: v-bind(primaryColorBind) !important;
}
.muscle-groups label[for='trapezius']:hover ~ svg #Trapezius path {
  opacity: 0.75;
}
.muscle-groups .trapezius:checked ~ svg #Trapezius path {
  opacity: 0.8;
  fill: v-bind(primaryColorBind) !important;
}

main.muscle-groups-container {
  display: flex;
  justify-content: center;
  align-items: v-bind(musculeGroupsContainerAlignItemsBind);
  min-height: 100%;
  width: 100%;
}

/* Vue wrapper */
.disabled-pointer-events {
  pointer-events: none;
}
</style>
